import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./games/Home";
import Blackjack from "./games/Blackjack";
import Baccarat from "./games/Baccarat";
import Roulette from "./games/Roulette";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blackjack" element={<Blackjack />} />
        <Route path="/baccarat" element={<Baccarat />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
    </Router>
  );
};

export default App;
