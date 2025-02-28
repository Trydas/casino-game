import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Select a Casino Game</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/blackjack" className="p-4 bg-blue-600 rounded-xl text-center">Blackjack</Link>
        <Link to="/baccarat" className="p-4 bg-red-600 rounded-xl text-center">Baccarat</Link>
        <Link to="/roulette" className="p-4 bg-green-600 rounded-xl text-center">Roulette</Link>
      </div>
    </div>
  );
};

const Blackjack = () => <GamePage title="Blackjack" />;
const Baccarat = () => <GamePage title="Baccarat" />;
const Roulette = () => <GamePage title="Roulette" />;

const GamePage = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <Link to="/" className="mt-4 p-2 bg-gray-700 rounded-lg">Back to Home</Link>
    </div>
  );
};

function App() {
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
}

export default App;
