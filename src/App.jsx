// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page/landing_page.jsx";

// auth
import SelectUserType from "./pages/auth/SelectuserType.jsx";
import Signup from "./pages/auth/signup.jsx";

// athlete onboarding
import GenderPronoun from "./pages/athletes/onboarding/GenderPronoun.jsx";
import FitnessGoal from "./pages/athletes/onboarding/FItnessGoal.jsx";
import HeightSelection from "./pages/athletes/onboarding/HeightSelection.jsx";
import PlanSelection from "./pages/athletes/onboarding/PlanSelection.jsx";
import PaymentMethod from "./pages/athletes/onboarding/PaymentMethod.jsx";
import PaymentSuccess from "./pages/athletes/onboarding/PaymentSuccess.jsx";
import VerifyOtp from "./pages/auth/VerifyOtp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Select type → then signup → then onboarding */}
        <Route path="/select-type" element={<SelectUserType />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/athletes/onboarding/gender" element={<GenderPronoun />} />
        <Route path="/athletes/onboarding/goal" element={<FitnessGoal />} />
        <Route path="/athletes/onboarding/height" element={<HeightSelection />} />
        <Route path="/athletes/onboarding/plan" element={<PlanSelection />} />
        <Route path="/athletes/onboarding/payment" element={<PaymentMethod />} />
        <Route
          path="/athletes/onboarding/payment-success"
          element={<PaymentSuccess />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
