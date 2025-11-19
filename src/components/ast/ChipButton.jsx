import React from "react";
import "./assets/ChipButton.css";

export default function ChipButton({ label, selected, onClick }) {
  return (
    <button
      type="button"
      className={
        "chip-btn " + (selected ? "chip-btn--selected" : "chip-btn--default")
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}
