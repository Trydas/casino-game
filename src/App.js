import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blackjack from "./games/Blackjack";
import Baccarat from "./games/Baccarat";
import Roulette from "./games/Roulette";

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to Casino Game</h1>
        <nav>
          <ul>
            <li><Link to="/blackjack">Blackjack</Link></li>
            <li><Link to="/baccarat">Baccarat</Link></li>
            <li><Link to="/roulette">Roulette</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/blackjack" element={<Blackjack />} />
          <Route path="/baccarat" element={<Baccarat />} />
          <Route path="/roulette" element={<Roulette />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
