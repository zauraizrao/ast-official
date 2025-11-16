import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AthleteEmptyState = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      {/* Illustration */}
      <div className="mb-8">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="80" r="60" fill="hsl(var(--muted))" />
          <ellipse cx="100" cy="180" rx="80" ry="10" fill="hsl(var(--muted))" opacity="0.3" />
          <path
            d="M70 80 Q100 110 130 80"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="85" cy="70" r="5" fill="hsl(var(--foreground))" />
          <circle cx="115" cy="70" r="5" fill="hsl(var(--foreground))" />
          <path
            d="M60 120 L80 160 L100 140 L120 160 L140 120"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Text */}
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        Seleziona il tuo Atleta
      </h2>
      <p className="text-muted-foreground text-center mb-6 max-w-md">
        Sentiti libero di visualizzare il profilo del tuo atleta toccando il pulsante qui sotto
      </p>

      {/* Button */}
      <Button variant="outline" className="border-dashed">
        <Plus className="w-4 h-4 mr-2" />
        Aggiungi un Atleta
      </Button>
    </div>
  );
};
