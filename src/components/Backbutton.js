import React from "react";
import { useNavigate } from "react-router-dom";
import "./split_screen.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="back-button"
      onClick={() => navigate("/home")}
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#444",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "darkgray")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "gray")}
    >
      Back
    </button>
  );
};

export default BackButton;
