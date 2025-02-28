import React from "react";

function Home() {
  console.log("Home component loaded");

  return (
    <div>
      <h1>Welcome to Integrated Casino®</h1>
      <h2>Please select a game</h2>
      <ul>
        <li><a href="/blackjack">Blackjack</a></li>
        <li><a href="/baccarat">Baccarat</a></li>
        <li><a href="/roulette">Roulette</a></li>
      </ul>
    </div>
  );
}

export default Home;
