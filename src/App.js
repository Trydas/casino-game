import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Casino Game</h1>
      <p>歡迎來到 Casino Game，請選擇您的遊戲！</p>
      <button onClick={() => alert("Play Blackjack!")}>21 點 (Blackjack)</button>
      <button onClick={() => alert("Play Baccarat")}>老虎機 (Slot Machine)</button>
    </div>
  );
}

export default App;
