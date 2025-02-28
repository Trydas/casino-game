import React from "react";
import { Link } from "react-router-dom";

function Home() {
  console.log("Home component loaded");

  return (
    <div>
      <h1>Welcome to Integrated Casino®</h1>
      <h2>Please select a game</h2>
      <ul>
        <li><Link to="/blackjack">Blackjack</Link></li>
        <li><Link to="/baccarat">Baccarat</Link></li>
        <li><Link to="/roulette">Roulette</Link></li>
      </ul>
    </div>
  );
}

export default Home;
