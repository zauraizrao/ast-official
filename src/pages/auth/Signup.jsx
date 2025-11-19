// src/pages/athletes/Signup.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./assets/Signup.css";

const InputRow = ({ icon, placeholder, type = "text" }) => (
  <div className="signup-input-row">
    <span className="signup-input-icon">{icon}</span>
    <input
      type={type}
      placeholder={placeholder}
      className="signup-input"
    />
  </div>
);

const SocialButton = ({ label, icon }) => (
  <button type="button" className="signup-social-btn">
    <img src={icon} alt="" className="signup-social-icon-img" />
    <span>{label}</span>
  </button>
);


export default function Signup() {
  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/verify-otp");
};


  return (
    <div className="signup-root">
      <div className="signup-shell">
        <div className="signup-inner">
          {/* AST logo */}
          <div className="signup-logo">
            <span className="signup-logo-a">A</span>
            <span className="signup-logo-st">ST</span>
          </div>

          {/* Heading + subtext */}
          <div className="signup-heading">
            <h1>Conosciamoti meglio.</h1>
            <p>
              Questo ci aiuta a personalizzare il tuo primo piano di
              allenamento e nutrizione.
            </p>
          </div>

          {/* Form */}
          <form className="signup-form" onSubmit={handleSubmit}>
            <InputRow icon="👤" placeholder="Nome e cognome" />
            <InputRow icon="📧" placeholder="Indirizzo e-mail" type="email" />
            <InputRow icon="🔒" placeholder="Password" type="password" />

            {/* thin “Continuare” text in center */}
            <button type="submit" className="signup-continue-link">
              Continuare
            </button>
          </form>

          {/* Social sign-in buttons */}
         <div className="signup-social">
  <SocialButton
    label="Continua con Google"
    icon="/google-icon.png"
  />
  <SocialButton
    label="Continua con Apple"
    icon="/apple-icon.png"
  />
</div>


          {/* Terms */}
          <p className="signup-terms">
            Confermo di aver letto e accettato i{" "}
            <button type="button" className="signup-terms-link">
              Termini di utilizzo
            </button>{" "}
            e l&apos;{" "}
            <button type="button" className="signup-terms-link">
              Informativa sulla privacy
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
