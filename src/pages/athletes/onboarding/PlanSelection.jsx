// src/pages/athletes/onboarding/PlanSelection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "../../../components/ast/OnboardingLayout";
import PrimaryButton from "../../../components/ast/PrimaryButton";
import "./assets/PlanSelection.css";

export default function PlanSelection() {
  const navigate = useNavigate();

  return (
    <OnboardingLayout
      step={5}
      totalSteps={6}
      title="Scegli il tuo piano"
      subtitle="Atleti che utilizzano l’app per allenamento e nutrizione."
    >
      <div className="plan-section">
        {/* benefits list */}
        <ul className="plan-benefits">
          <li>
            <span className="plan-check">✓</span>
            <span>Accesso ai piani di allenamento e nutrizione</span>
          </li>
          <li>
            <span className="plan-check">✓</span>
            <span>Check-in intelligente settimanale</span>
          </li>
          <li>
            <span className="plan-check">✓</span>
            <span>Integrazione con Apple Health/Google Fit</span>
          </li>
          <li>
            <span className="plan-check">✓</span>
            <span>Chat limitata con l’allenatore (solo testo)</span>
          </li>
        </ul>

        {/* thin divider like in Figma */}
        <div className="plan-divider" />

        {/* single plan card */}
        <div className="plan-card">
          <div className="plan-card-text">
            <div className="plan-card-title">
              Piano Base - €79/mese
            </div>
            <div className="plan-card-subtitle">Mese</div>
          </div>

          <button type="button" className="plan-radio">
            <span className="plan-radio-inner" />
          </button>
        </div>
      </div>

      <PrimaryButton
        onClick={() => navigate("/athletes/onboarding/payment")}
      >
        Scegli il piano
      </PrimaryButton>
    </OnboardingLayout>
  );
}
