// src/pages/athletes/SelectUserType.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/SelectUserType.css";
import dumbell from "./assets/images/dumbbell.png";
import coach from "./assets/images/coach.png";
import tutor from "./assets/images/tutor.png";

const roles = [
  {
    id: "atleta",
    label: "Atleta",
    description: "Ottieni piani di allenamento e nutrizione su misura per te.",
    variant: "athlete",
    img: dumbell
  },
  {
    id: "allenatore",
    label: "Allenatore",
    description:
      "Gestisci gli atleti e sviluppa la tua carriera da coach.",
    variant: "coach",
    img: coach,
  },
  {
    id: "tutor",
    label: "Tutor",
    description: "Eroga corsi e certifica nuovi coach.",
    variant: "tutor",
    img: tutor,
  },
];

function RoleCard({ role, selected, onClick }) {
  return (
    <button
      type="button"
      className={
        "role-card role-card--" +
        role.variant +
        (selected ? " role-card--selected" : "")
      }
      onClick={onClick}
    >
      <div className="role-card__text">
        <div className="role-card__label">{role.label}</div>
        <div className="role-card__description">{role.description}</div>
      </div>

      {/* Placeholder for image / illustration */}
      <div className="role-card__image-placeholder">
        <img src={role.img} alt="" />
      </div>
    </button>
  );
}

export default function SelectUserType() {
  const [selectedRole, setSelectedRole] = useState("atleta");
  const navigate = useNavigate();

  const handleContinue = () => {
    // later you can branch by role
    navigate("/signup");
  };

  return (
    <div className="select-type-root">
      <div className="select-type-shell">
        {/* LEFT SECTION */}
        <div className="select-type-left">
          {/* Logo */}
          <div className="select-type-logo">
            <span className="select-type-logo__a">A</span>
            <span className="select-type-logo__st">ST</span>
          </div>

          {/* Heading */}
          <div className="select-type-heading">
            <h1>Dicci chi sei per continuare.</h1>
            <p>
              Seleziona l&apos;opzione che ti descrive meglio. Questo
              personalizzerà la tua esperienza.
            </p>
          </div>

          {/* Role cards */}
          <div className="select-type-roles">
            {roles.map((r) => (
              <RoleCard
                key={r.id}
                role={r}
                selected={selectedRole === r.id}
                onClick={() => setSelectedRole(r.id)}
              />
            ))}
          </div>

          {/* tiny slider indicator */}
          <div className="select-type-slider">
            <div className="select-type-slider__track">
              <div className="select-type-slider__thumb" />
            </div>
          </div>

          {/* Continue button */}
          <button
            type="button"
            className="select-type-continue-btn"
            onClick={handleContinue}
          >
            Continuare
          </button>
        </div>

        {/* RIGHT SECTION – IMAGE PLACEHOLDER */}
        <div className="select-type-right">
          {/* Replace background-image in CSS with your real image */}
          <div className="select-type-right__image-overlay" />
        </div>
      </div>
    </div>
  );
}
