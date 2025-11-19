import React from "react";
import "./assets/OnboardingLayout.css";

export default function OnboardingLayout({
  step,
  totalSteps,
  title,
  subtitle,
  children,
}) {
  const stepsArray = Array.from({ length: totalSteps });

  return (
    <div className="ob-root">
      <div className="ob-shell">
        {/* top red gradient background */}
        <div className="ob-top-bg" />

        {/* HEADER: logo, steps, close */}
        <header className="ob-header">
          <div className="ob-logo">
            <span className="ob-logo-a">A</span>
            <span className="ob-logo-st">ST</span>
          </div>

          <div className="ob-steps">
            {stepsArray.map((_, idx) => (
              <span
                key={idx}
                className={
                  "ob-step-dot " + (idx < step ? "ob-step-dot--active" : "")
                }
              />
            ))}
          </div>

          <button className="ob-close-btn" type="button">
            ×
          </button>
        </header>

        {/* MAIN CONTENT */}
        <main className="ob-main">
          <div className="ob-center">
            <h1 className="ob-title">{title}</h1>
            {subtitle && <p className="ob-subtitle">{subtitle}</p>}

            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
