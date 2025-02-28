import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Integrated Casino®</h1>
      <h2>Please select a game</h2>
      <div style={{ marginTop: "20px", fontSize: "20px" }}>
        <p><Link to="/blackjack">Blackjack</Link></p>
        <p><Link to="/baccarat">Baccarat</Link></p>
        <p><Link to="/roulette">Roulette</Link></p>
      </div>
    </div>
  );
};

export default Home;
