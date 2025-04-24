// src/pages/CommentaryPage.js
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import '../App.css';

function CommentaryPage() {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const socketRef = useRef(null);
  const bottomRef = useRef(null);

  const matchNames = {
    INDvsPAK: 'India vs Pakistan',
    ENGvsAUS: 'England vs Australia',
    RCBvsCSK: 'Royal Challengers Bengaluru vs Chennai Super Kings'
  };

  useEffect(() => {
    const socket = io('http://localhost:5000', {
      transports: ['websocket'],
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('✅ Connected to backend');
    });

    socket.on('commentary', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [matchId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const startCommentary = () => {
    socketRef.current.emit('start-commentary', { matchId });
    setIsRunning(true);
  };

  const stopCommentary = () => {
    socketRef.current.emit('stop-commentary');
    setIsRunning(false);
  };

  // 🔥 Event-driven UI logic
  const getEventClass = (msg) => {
    if (/\b(out|wicket|bowled|lbw|caught)\b/i.test(msg)) return 'event-wicket';
    if (/six/i.test(msg)) return 'event-six';
    if (/four/i.test(msg)) return 'event-four';
    if (/50|100|milestone|century/i.test(msg)) return 'event-milestone';
    return '';
  };

  return (
    <div className="commentary-page">
      <div className="commentary-header">
        <h1>🎙 Live Commentary - {matchNames[matchId] || matchId}</h1>
        <button className="back-button" onClick={() => navigate('/')}>
          ⬅ Back to Home
        </button>
      </div>

      <div className="button-group">
        <button onClick={startCommentary} disabled={isRunning}>
          ▶ Start
        </button>
        <button onClick={stopCommentary} disabled={!isRunning}>
          ⏸ Stop
        </button>
      </div>

      <div className="commentary-box">
        {messages.length === 0 ? (
          <p className="waiting">Waiting for commentary...</p>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className={`commentary-line ${getEventClass(msg)}`}>
              🗣 {msg}
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default CommentaryPage;