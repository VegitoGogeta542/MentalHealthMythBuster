import React, { useState } from "react";
import "./split_screen.css";
import BackButton from "./Backbutton";
import ContinueButton from "./continue_button";

const SplitScreen = ({ myth, correctAnswer, fact }) => {
  const [showFact, setShowFact] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const [userFeedback, setUserFeedback] = useState("");

  const factsArray = fact.split(". ").filter((sentence) => sentence.trim() !== "");

  const handleTrueFalseClick = (selectedAnswer) => {
    setShowFact(true);
    setUserFeedback(selectedAnswer === correctAnswer ? "Correct!" : "Incorrect!");
  };

  const handleContinueClick = () => {
    if (factIndex < factsArray.length - 1) {
      setFactIndex(factIndex + 1);
    } else {
      setFactIndex(0); // Reset for replay
    }
  };

  return (
    <div className="split-screen-container">
      {/* Left Section: Myth with True/False buttons */}
      <div className="myth-section">
        <h2 className="section-heading">{myth}</h2>
        <div className="true-false-buttons">
          <button
            className="reveal-button-true"
            onClick={() => handleTrueFalseClick("True")}
          >
            True
          </button>
          <button
            className="reveal-button-false"
            onClick={() => handleTrueFalseClick("False")}
          >
            False
          </button>
        </div>
      </div>

      {/* Right Section: Fact, Feedback, and Buttons */}
      <div className="fact-section">
        {showFact ? (
          <>
            <p className="user-feedback">{userFeedback}</p>
            <p className="fact-text">{factsArray[factIndex]}</p>
            {factIndex < factsArray.length - 1 ? (
              <div className="button-container">
                <ContinueButton onClick={handleContinueClick} />
              </div>
            ) : (
              <div className="button-container">
                <ContinueButton onClick={handleContinueClick} />
                <button
                  className="continuebutton"
                  onClick={() => {
                    setFactIndex(0); // Reset facts
                    setShowFact(false); // Hide fact section
                    setUserFeedback(""); // Reset feedback
                  }}
                >
                  Replay
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="placeholder-text">
            Click True or False to reveal the truth!
          </p>
        )}
        <BackButton />
      </div>
    </div>
  );
};

export default SplitScreen;
