import React from "react";
import "./assets/PrimaryButton.css";

export default function PrimaryButton({ onClick, children, disabled }) {
  return (
    <button
      type="button"
      className="primary-btn"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
