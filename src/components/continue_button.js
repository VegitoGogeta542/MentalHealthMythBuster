import React from "react";
import "./continue_button.css";

const ContinueButton = ({ onClick }) => {
  return (
    <button className="continuebutton" onClick={onClick}>
      Continue
    </button>
  );
};

export default ContinueButton;
