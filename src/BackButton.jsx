import React from "react";
import "./BackButton.css";

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button className="back-btn" onClick={handleBack}>
      ⬅ Back
    </button>
  );
};

export default BackButton;