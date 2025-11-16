import { ChevronRight } from "lucide-react";

interface AISuggestionProps {
  day: string;
  exercises: string[];
}

export const AISuggestion = ({ day, exercises }: AISuggestionProps) => {
  return (
    <div className="flex items-start justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group cursor-pointer">
      <div>
        <h4 className="font-semibold text-foreground mb-2">{day}</h4>
        <ul className="space-y-1">
          {exercises.map((exercise, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary">-</span>
              <span>{exercise}</span>
            </li>
          ))}
        </ul>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
    </div>
  );
};
