const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { exec } = require('child_process'); // To run fluvio command

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // your React frontend
    methods: ["GET", "POST"]
  }
});

// Sample list of matches
const matches = [
  { id: 'match1', name: 'India vs Pakistan - 1st ODI', topic: 'match1-topic' },
  { id: 'match2', name: 'England vs Australia - 2nd T20', topic: 'match2-topic' },
  { id: 'match3', name: 'RCB vs CSK - IPL Match', topic: 'match3-topic' },
];

// Route to get all matches
app.get('/api/matches', (req, res) => {
  res.json(matches);
});

// Variables to track state
let fluvioProcess = null;
let messageQueue = [];
let interval = null;
let currentIndex = 0; // Track where we left off

io.on('connection', (socket) => {
  console.log('✅ New client connected');

  // Handle start-commentary event
  socket.on('start-commentary', () => {
    console.log('▶ Starting commentary');

    // Spawn Fluvio consumer if not already running
    if (!fluvioProcess) {
      fluvioProcess = exec('fluvio consume --beginning cricket-feed');

      fluvioProcess.stdout.on('data', (data) => {
        const lines = data.trim().split('\n');
        messageQueue.push(...lines); // Add messages to the queue
      });

      fluvioProcess.stderr.on('data', (data) => {
        console.error('Fluvio error:', data);
      });

      fluvioProcess.on('close', () => {
        console.log('Fluvio process exited');
      });
    }

    // Resume sending messages from the last known index
    if (!interval) {
      interval = setInterval(() => {
        if (currentIndex < messageQueue.length) {
          const msg = messageQueue[currentIndex];
          socket.emit('commentary', msg);
          currentIndex++; // Move to the next message
        }
      }, 2000); // Emit messages every 2 seconds
    }
  });

  // Handle stop-commentary event
  socket.on('stop-commentary', () => {
    console.log('⏹ Stopping commentary');
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    // Do not reset messageQueue or currentIndex to resume later
  });

  // Cleanup on client disconnect
  socket.on('disconnect', () => {
    console.log('❌ Client disconnected');
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    if (fluvioProcess) {
      fluvioProcess.kill();
      fluvioProcess = null;
    }
    messageQueue = [];
    currentIndex = 0; // Reset index
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});