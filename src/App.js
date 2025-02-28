import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blackjack from "./components/Blackjack";
import Baccarat from "./components/Baccarat";
import Roulette from "./components/Roulette";

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
