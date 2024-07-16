// src/App.js
import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard.jsx';
import './App.css'

function App() {
  const player = {
    name: "LeBron James",
    image: "https://cdn.leonardo.ai/users/2915186a-2dbd-4aa0-97ef-0ae59b69ca49/generations/64d77028-dc7f-4185-96bc-a9f334f78cd2/Default_LeBron_James_a_powerful_athletic_figure_rendered_in_vi_3.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5,
    },
  };

  return (
    <>
   <h1>Baskball Card</h1>
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
  
    </div>
    </>
  );
}

export default App;
