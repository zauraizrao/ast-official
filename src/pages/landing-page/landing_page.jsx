import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Benvenuto in A.S.T.</h1>
        <p className="text-neutral-400 mb-10">
          La piattaforma definitiva per atleti, coach e tutor.
        </p>

        {/* Register Button */}
        <button
          onClick={() => navigate("/signup")}
          className="px-10 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold transition"
        >
          Registrati ora
        </button>
        <button
  onClick={() => navigate("/select-type")}
  className="px-10 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold transition"
>
  Registrati ora
</button>

      </div>
    </div>
  );
}
