import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "../../../components/ast/OnboardingLayout";
import ChipButton from "../../../components/ast/ChipButton";
import PrimaryButton from "../../../components/ast/PrimaryButton";

const goals = [
  "Perdita di grasso",
  "Prestazioni",
  "Idoneità generale",
  "Muscoli",
  "Addominali",
  "Bicipiti",
];

const levels = ["Principiante", "Intermedio", "Avanzato"];

export default function FitnessGoal() {
  const [goal, setGoal] = useState("Prestazioni");
  const [level, setLevel] = useState("Principiante");
  const navigate = useNavigate();

  return (
    <OnboardingLayout
      step={2}
      totalSteps={6}
      title="Facci conoscere il tuo obiettivo e la tua esperienza"
      subtitle="Useremo la tua altezza per personalizzare i tuoi piani di fitness e nutrizione."
    >
      <div style={{ marginTop: "48px", marginBottom: "48px", width: "100%" }}>
        {/* Obiettivo fitness section */}
        <div style={{ marginBottom: "36px" }}>
          <h3
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888888",
              marginBottom: "16px",
            }}
          >
            Obiettivo fitness
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
              maxWidth: "100%",
            }}
          >
            {goals.map((g) => (
              <ChipButton
                key={g}
                label={g}
                selected={goal === g}
                onClick={() => setGoal(g)}
              />
            ))}
          </div>
        </div>

        {/* Livello di esperienza section */}
        <div>
          <h3
            style={{
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888888",
              marginBottom: "16px",
            }}
          >
            Livello di esperienza
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
              maxWidth: "100%",
            }}
          >
            {levels.map((l) => (
              <ChipButton
                key={l}
                label={l}
                selected={level === l}
                onClick={() => setLevel(l)}
              />
            ))}
          </div>
        </div>
      </div>

      <PrimaryButton
        onClick={() => navigate("/athletes/onboarding/height")}
      >
        Avanti
      </PrimaryButton>
    </OnboardingLayout>
  );
}
