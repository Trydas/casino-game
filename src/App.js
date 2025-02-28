import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./games/Home";  // 確保路徑正確

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
