import React, { useState } from "react";

const App = () => {
  const [leftState, setLeftState] = useState("");
  const [rightState, setRightState] = useState("");

  const leftEnter = () => {
    setLeftState("active");
    setRightState("inactive");
  };

  const leave = () => {
    setLeftState("");
    setRightState("");
  };

  const rightEnter = () => {
    setLeftState("inactive");
    setRightState("active");
  };

  return (
    <>
      <div className={`split left ${leftState}`} onMouseEnter={leftEnter} onMouseLeave={leave}>
        <h1>Playstation 5</h1>
        <a href="#" className="btn">
          Buy Now
        </a>
      </div>
      <div className={`split right ${rightState}`} onMouseEnter={rightEnter} onMouseLeave={leave}>
        <h1>XBox Series X</h1>
        <a href="#" className="btn">
          Buy Now
        </a>
      </div>
    </>
  );
};

export default App;
