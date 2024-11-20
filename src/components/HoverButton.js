import React from "react";
import { Link } from "react-router-dom";
import "./border_hover.css";

const HoverButton = ({ title, link }) => {
  return (
    <div className="wrap">
      <Link to={link} className="hover-link">
        <div className="box">
          {title}
        </div>
      </Link>
    </div>
  );
};

export default HoverButton;
