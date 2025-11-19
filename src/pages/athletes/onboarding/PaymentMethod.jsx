// src/pages/athletes/onboarding/PaymentMethod.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "../../../components/ast/OnboardingLayout";
import "./assets/PaymentMethod.css";

const methods = [
  { id: "stripe", label: "Stripe" },
  { id: "apple", label: "Apple Pay" },
  { id: "paypal", label: "Paypal" },
  { id: "google", label: "Google Pay" },
];

export default function PaymentMethod() {
  const [selected, setSelected] = useState("stripe");
  const navigate = useNavigate();

  return (
    <OnboardingLayout
      step={6}
      totalSteps={6}
      title="Metodo di pagamento"
      subtitle="Seleziona il tuo metodo di pagamento preferito."
    >
      <div className="pay-section">
        {/* METHODS LIST */}
        <div className="pay-methods">
          {methods.map((m) => (
            <button
              key={m.id}
              type="button"
              className={
                "pay-method " + (selected === m.id ? "pay-method--active" : "")
              }
              onClick={() => setSelected(m.id)}
            >
              <div className="pay-method-left">
                {/* ICON SLOT – you already pointed your images to /public/icons */}
                <span className="pay-method-icon">
                  {m.id === "stripe" && (
                    <img src="/icons/stripe.svg" alt="Stripe" />
                  )}
                  {m.id === "apple" && (
                    <img src="/icons/apple-icon.png" alt="Apple Pay" />
                  )}
                  {m.id === "paypal" && (
                    <img src="/icons/paypal.png" alt="PayPal" />
                  )}
                  {m.id === "google" && (
                    <img src="/icons/google-icon.png" alt="Google Pay" />
                  )}
                </span>

                <span className="pay-method-label">{m.label}</span>
              </div>

              <div
                className={
                  "pay-radio " +
                  (selected === m.id ? "pay-radio--active" : "")
                }
              >
                {selected === m.id && <span className="pay-radio-inner" />}
              </div>
            </button>
          ))}
        </div>

        {/* PLAN SUMMARY CARD */}
        <div className="pay-summary">
          <div className="pay-summary-row">
            <span className="pay-summary-label">Piano</span>
            <span className="pay-summary-value pay-summary-value--strong">
              Base
            </span>
          </div>
          <div className="pay-summary-row">
            <span className="pay-summary-label">Importo</span>
            <span className="pay-summary-value">€79.00</span>
          </div>

          <div className="pay-summary-divider" />

          <div className="pay-summary-row">
            <span className="pay-summary-label">Totale</span>
            <span className="pay-summary-value pay-summary-value--strong">
              €79.00
            </span>
          </div>
        </div>
      </div>

      {/* DARK PILL BUTTON AT BOTTOM */}
      <button
        type="button"
        className="pay-submit-btn"
        onClick={() => navigate("/athletes/onboarding/payment-success")}
      >
        Paga ora
      </button>
    </OnboardingLayout>
  );
}
