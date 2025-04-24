// src/pages/HomePage.js
//import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dummyMatches = [
  { id: 'INDvsPAK', name: 'India vs Pakistan (Live)' },
  { id: 'ENGvsAUS', name: 'England vs Australia' },
  { id: 'RCBvsCSK', name: 'Royal Challengers Bengaluru vs Cheanni Super kings' }
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleFollow = (matchId) => {
    if (matchId === 'INDvsPAK') {
      navigate(`/commentary/${matchId}`);
    } else {
      alert('🚧 Commentary for this match is coming soon!');
    }
  };

  return (
    <div className="home">
      <h1>🏏 Select a Match to Follow</h1>
      <ul>
        {dummyMatches.map(match => (
          <li key={match.id} className="match-card">
            <span>{match.name}</span>
            <button className='follow-button' onClick={() => handleFollow(match.id)}>📡 Follow</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;