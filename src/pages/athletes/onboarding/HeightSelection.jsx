import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "../../../components/ast/OnboardingLayout";
import PrimaryButton from "../../../components/ast/PrimaryButton";
import "./HeightSelection.css";

export default function HeightSelection() {
  const [height, setHeight] = useState(120);
  const pickerRef = useRef(null);
  const navigate = useNavigate();

  // Scroll to active item on mount and when height changes
  useEffect(() => {
    if (pickerRef.current) {
      const itemHeight = 50;
      const scrollPosition = (height - 100) * itemHeight;
      pickerRef.current.scrollTop = scrollPosition;
    }
  }, [height]);

  // Handle wheel scroll for picker
  const handleWheel = (e) => {
    if (pickerRef.current) {
      const maxHeight = 220;
      const minHeight = 100;

      if (e.deltaY > 0) {
        setHeight((prev) => Math.min(prev + 1, maxHeight));
      } else {
        setHeight((prev) => Math.max(prev - 1, minHeight));
      }
      e.preventDefault();
    }
  };

  // Generate height options (100 to 220)
  const heightOptions = Array.from({ length: 121 }, (_, i) => 100 + i);

  return (
    <OnboardingLayout
      step={3}
      totalSteps={6}
      title="Conosciamo il tuo peso."
      subtitle="Useremo la tua altezza per personalizzare i tuoi piani di fitness e nutrizione."
    >
              <div className="height-section">
        <div className="height-wrapper" onWheel={handleWheel}>
          {/* Scrollable numbers column */}
          <div className="height-scroll-container">
            <div className="height-scroll" ref={pickerRef}>
              {heightOptions.map((h) => (
                <div
                  key={h}
                  className={`height-number ${h === height ? "active" : ""}`}
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Top and bottom gradient overlays */}
            <div className="height-overlay height-overlay-top" />
            <div className="height-overlay height-overlay-bottom" />
          </div>

          {/* Center pill + label (like the design) */}
          <div className="height-pill-wrapper">
            {/* <div className="height-label">piedi</div> */}
            <div className="height-pill">
              <span className="height-number-display">{height}</span>
              <span className="height-unit-display">cm</span>
            </div>
          </div>
        </div>
      </div>



      <PrimaryButton
        onClick={() => navigate("/athletes/onboarding/plan")}
      >
        Avanti
      </PrimaryButton>
    </OnboardingLayout>
  );
}
