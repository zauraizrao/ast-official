// src/pages/athletes/onboarding/PaymentSuccess.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/PaymentSuccess.css";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="ps-root">
      <div className="ps-shell">
        {/* AST logo */}
        <div className="ps-logo">
          <span className="ps-logo-a">A</span>
          <span className="ps-logo-st">ST</span>
        </div>

        {/* receipt card in the center */}
        <div className="ps-card-wrapper">
          <div className="ps-card">
            <div className="ps-emoji">🎉</div>

            <h2 className="ps-title">Abbonamento attivato con successo!</h2>

            <p className="ps-subtitle">
              Ora hai accesso ai tuoi piani personalizzati, ai check-in
              settimanali e alla chat con il coach.
            </p>

            <div className="ps-info">
              <div className="ps-info-row">
                <span className="ps-info-label">ID pagamento</span>
                <span className="ps-info-value">003753536379333</span>
              </div>
              <div className="ps-info-row">
                <span className="ps-info-label">Importo pagato</span>
                <span className="ps-info-value">€19.99</span>
              </div>
              <div className="ps-info-row">
                <span className="ps-info-label">Data e ora</span>
                <span className="ps-info-value">20 Ago 2025 · 01:03</span>
              </div>
              <div className="ps-info-row">
                <span className="ps-info-label">Metodo di pagamento</span>
                <span className="ps-info-value ps-info-link">stripe</span>
              </div>
            </div>

            <button
              type="button"
              className="ps-card-btn"
            >
              Scarica ricevuta
            </button>
          </div>
        </div>

        {/* bottom buttons */}
        <div className="ps-bottom-actions">
          <button type="button" className="ps-bottom-btn ps-bottom-btn--ghost">
            Scarica ricevuta
          </button>
          <button
            type="button"
            className="ps-bottom-btn ps-bottom-btn--primary"
            onClick={() => navigate("/athletes/dashboard")}
          >
            Fatto
          </button>
        </div>
      </div>
    </div>
  );
}
