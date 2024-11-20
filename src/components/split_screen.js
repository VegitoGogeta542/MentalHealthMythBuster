import React, { useState } from "react";
import "./split_screen.css";

const SplitScreen = ({ myth, correctAnswer, fact }) => {
  const sentences = fact.split(". "); // Split the fact into sentences
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState(null); // Feedback for True/False answer
  const [showFact, setShowFact] = useState(false); // Show the fact or not

  const handleTrueClick = () => {
    if (correctAnswer === "True") {
      setAnswerFeedback("Correct!");
      setShowFact(true);
    } else {
      setAnswerFeedback("Incorrect.");
    }
  };

  const handleFalseClick = () => {
    if (correctAnswer === "False") {
      setAnswerFeedback("Correct!");
      setShowFact(true);
    } else {
      setAnswerFeedback("Incorrect.");
    }
  };

  const handleContinueClick = () => {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
    }
  };

  const handleReset = () => {
    setCurrentSentenceIndex(0);
    setAnswerFeedback(null);
    setShowFact(false);
  };

  return (
    <div className="split-screen-container">
      {/* Left Section for the Myth */}
      <div className="myth-section">
        <h2 className="section-heading">{myth}</h2>
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <button className="reveal-button-true" onClick={handleTrueClick}>
            True
          </button>
          <button className="reveal-button-false" onClick={handleFalseClick}>
            False
          </button>
        </div>
        {answerFeedback && <p style={{ marginTop: "20px" }}>{answerFeedback}</p>}
      </div>

      {/* Right Section for the Fact */}
      <div className="fact-section">
        {showFact ? (
          <>
            <p className="fact-text">{sentences[currentSentenceIndex]}</p>
            {currentSentenceIndex < sentences.length - 1 ? (
              <button className="continuebutton" onClick={handleContinueClick}>
                Continue
              </button>
            ) : (
              <button className="continuebutton" onClick={handleReset}>
                Replay
              </button>
            )}
          </>
        ) : (
          <p className="placeholder-text">Answer True or False to reveal the truth!</p>
        )}
      </div>
    </div>
  );
};

export default SplitScreen;
