// src/BasketballPlayerCard.js
import React from 'react';
import './BasketballPlayerCard.css';
 

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <img src={image} alt={name} className="player-image" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">Position:{position}</p>
      <div className="player-stats">
        <p>Points: {stats.pointsPerGame}</p>
        <p>Assists: {stats.assistsPerGame}</p>
        <p>Rebounds: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
