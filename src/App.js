import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./games/Home";
import Blackjack from "./games/Blackjack";  // 確保路徑正確

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blackjack" element={<Blackjack />} />
      </Routes>
    </Router>
  );
}

export default App;
