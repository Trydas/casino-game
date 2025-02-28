import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./games/Home";
import Blackjack from "./games/Blackjack";
import Baccarat from "./games/Baccarat";
import Roulette from "./games/Roulette";

function App() {
  return (
    <Routes>
      {/* 首頁 */}
      <Route path="/" element={<Home />} />
      {/* 三個遊戲頁面 */}
      <Route path="/blackjack" element={<Blackjack />} />
      <Route path="/baccarat" element={<Baccarat />} />
      <Route path="/roulette" element={<Roulette />} />
    </Routes>
  );
}

export default App;
