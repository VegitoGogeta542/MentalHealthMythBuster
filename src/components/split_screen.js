import React, { useState } from "react";
import "./split_screen.css";
import BackButton from "./Backbutton.js";

const SplitScreen = ({ myth, correctAnswer, fact }) => {
  const [userAnswer, setUserAnswer] = useState(null);

  const handleButtonClick = (answer) => {
    setUserAnswer(answer === correctAnswer ? "Correct!" : "Incorrect!");
  };

  return (
    <div className="split-screen-container">
      {/* Back Button */}
      <BackButton />

      {/* Left Section for the Myth */}
      <div className="myth-section">
        <h2 className="section-heading">{myth}</h2>
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button
            className="reveal-button-true"
            onClick={() => handleButtonClick("True")}
          >
            True
          </button>
          <button
            className="reveal-button-false"
            onClick={() => handleButtonClick("False")}
          >
            False
          </button>
        </div>
      </div>

      {/* Right Section for the Fact */}
      <div className="fact-section">
        {userAnswer ? (
          <p className="fact-text">{userAnswer}</p>
        ) : (
          <p className="placeholder-text">
            Select True or False to check your answer!
          </p>
        )}
        {userAnswer === "Correct!" && <p className="fact-text">{fact}</p>}
      </div>
    </div>
  );
};

export default SplitScreen;
