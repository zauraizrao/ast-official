// src/pages/athletes/VerifyOtp.jsx
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/VerifyOtp.css";

const OTP_LENGTH = 6;

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [seconds, setSeconds] = useState(30);
  const inputsRef = useRef([]);

  // simple countdown 00:30
  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 1); // only 1 digit
    const nextDigits = [...digits];
    nextDigits[index] = value;
    setDigits(nextDigits);

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = digits.join("");
    if (code.length === OTP_LENGTH) {
      // TODO: verify with backend here
      navigate("/athletes/onboarding/gender");
    }
  };

  const handleResend = () => {
    // TODO: call resend API here
    setSeconds(30); // reset timer visual
  };

  const formattedTime = `00:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="otp-root">
      <div className="otp-shell">
        <div className="otp-inner">
          {/* Logo */}
          <div className="otp-logo">
            <span className="otp-logo-a">A</span>
            <span className="otp-logo-st">ST</span>
          </div>

          {/* Title */}
          <h1 className="otp-title">Verifica</h1>

          {/* Description */}
          <p className="otp-text">
            Inserisci il codice di 6 cifre che hai ricevuto nella tua email.
          </p>

          {/* OTP inputs */}
          <form className="otp-form" onSubmit={handleSubmit}>
            <div className="otp-input-row">
              {digits.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="otp-input-box"
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => (inputsRef.current[index] = el)}
                />
              ))}
            </div>

            {/* Timer */}
            <div className="otp-timer">{formattedTime}</div>

            {/* Continue button */}
            <button type="submit" className="otp-continue-btn">
              Continuare
            </button>
          </form>

          {/* Resend text */}
          <p className="otp-resend">
            Se non hai ricevuto un codice?{" "}
            <button type="button" className="otp-resend-link" onClick={handleResend}>
              Reinvia
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
