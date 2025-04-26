![github-submission-banner](https://github.com/user-attachments/assets/a1493b84-e4e2-456e-a791-ce35ee2bcf2f)

🚀 Criczard
Real-time, event-driven cricket commentary feed with Ben 10–inspired visuals!

📌 Problem Statement  
Problem Statement C(Fluvio) – Live Sports Commentary Feed

🎯 Objective  
Criczard solves the problem of delayed or cluttered sports commentary by offering a real-time, visually dynamic cricket commentary feed. It’s designed for fans who want quick, clean, and immersive updates without the noise.

We use event-driven commentary rendering — highlighting key moments like sixes, wickets, and milestones — to engage users with an experience beyond just text updates.

🧠 Team & Approach  
Team Name:  
Soloo

Team Members:  
Vivek S (GitHub: @Vivek-1608)

Hruthvik R (GitHub: @Hruthvik55)

Our Approach:  
Chose this problem because we’re both cricket fans & wanted to push the boundary of real-time experiences.

Built a full-stack web app from scratch with real-time updates using Fluvio as the streaming backbone.

Faced challenges with deployment (Fluvio CLI compatibility with cloud), so we even tried with fluvio SDK.

Designed a Ben 10–inspired UI to make it playful and engaging!

🛠️ Tech Stack  
Core Technologies Used:  
Frontend: React, Socket.io-client, Tailwind CSS

Backend: Node.js, Express, Fluvio (CLI), Socket.io

Database: None (stream-based, no persistence needed)

APIs: Fluvio Cloud Topic (match1-topic)

Hosting: Render (Backend) + Vercel (Frontend)

Sponsor Technologies Used:  
✅ Fluvio: Used as a real-time event stream to push commentary updates to the frontend.

✨ Key Features  
✅ Real-time live commentary with event-triggered animations

✅ Ben 10–themed glowing UI with black-green gradient styling

✅ Dynamic commentary feed using Socket.io

✅ Supports multiple match topics (switchable architecture)

📽️ Demo & Deliverables  
Demo Video Link: [https://youtu.be/n9puzzlatbE]

Pitch Deck / PPT Link: [https://1drv.ms/p/c/282ba0d7eb439270/Eeub8Iq7zeNNq-xVVTFWYZ8BMb6QFqEs3JeZ_-f00s1SeA?e=WbsCoL]

✅ Tasks & Bonus Checklist  
✅ All members followed social channels and filled the form

✅ Bonus Task 1 - Shared badges and filled the form

✅ Bonus Task 2 - Signed up for Sprint.dev and filled the form

🧪 How to Run the Project  
Requirements:  
Node.js v18+

Fluvio Topic: match1-topic

Local Setup:

# Clone the repo  
git clone https://github.com/Vivek-1608/criczard  
cd criczard  

# Backend Setup  
cd backend   
npm install  
npm start  

# Frontend Setup  
cd ../frontend  
npm install  
npx react-scripts start  

🧬 Future Scope  
📈 Add user login + match history

🛡️ Add commentary moderation for abuse filtering

🌐 Add multiple language support and more sports (football, tennis)

🔔 Push notifications for key match events

📎 Resources / Credits  
Fluvio CLI

Socket.io Docs

Tailwind CSS

Thanks to InfinyOn for providing Fluvio Cloud access

🏁 Final Words  
We loved working on Criczard — from designing the Ben 10-inspired theme to streaming data live through Fluvio, it’s been a thrilling sprint! Learned a ton about real-time systems, deployment quirks, and teamwork.

Let the commentary never stop. 🏏💥
