import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "../../../components/ast/OnboardingLayout";
import ChipButton from "../../../components/ast/ChipButton";
import PrimaryButton from "../../../components/ast/PrimaryButton";
import "./assets/GenderPronoun.css";

export default function GenderPronoun() {
  const [gender, setGender] = useState("Maschio");
  const navigate = useNavigate();

  return (
    <OnboardingLayout
      step={1}
      totalSteps={6}
      title="Indica il tuo pronome."
      subtitle="Questo ci permette di adattare il tuo primo piano di allenamento e nutrizione alle sue esigenze."
    >
      <div className="gender-options">
        <ChipButton
          label="Maschio"
          selected={gender === "Maschio"}
          onClick={() => setGender("Maschio")}
        />
        <ChipButton
          label="Femmina"
          selected={gender === "Femmina"}
          onClick={() => setGender("Femmina")}
        />
      </div>

      <PrimaryButton onClick={() => navigate("/athletes/onboarding/goal")}>
        Avanti
      </PrimaryButton>
    </OnboardingLayout>
  );
}
