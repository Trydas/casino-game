import { Routes, Route } from "react-router-dom";
import Home from "./games/Home"; // 確保路徑正確

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
