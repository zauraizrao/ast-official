import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Athlete } from "@/pages/Athletes";

interface AthleteListProps {
  athletes: Athlete[];
  selectedAthlete: Athlete | null;
  onSelectAthlete: (athlete: Athlete) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: "tutto", label: "Tutto" },
  { id: "attiva", label: "Attiva" },
  { id: "inattiva", label: "Inattiva" },
  { id: "training", label: "Training" },
  { id: "stato", label: "Stato" },
];

export const AthleteList = ({
  athletes,
  selectedAthlete,
  onSelectAthlete,
  activeFilter,
  onFilterChange,
}: AthleteListProps) => {
  return (
    <div className="w-96 bg-card border-r border-border flex flex-col">
      {/* Filters */}
      <div className="p-4 border-b border-border">
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Athletes List */}
      <div className="flex-1 overflow-y-auto">
        {athletes.map((athlete) => {
          const isSelected = selectedAthlete?.id === athlete.id;
          return (
            <button
              key={athlete.id}
              onClick={() => onSelectAthlete(athlete)}
              className={cn(
                "w-full p-4 flex items-center gap-3 border-b border-border hover:bg-muted/50 transition-colors",
                isSelected && "bg-muted"
              )}
            >
              <Avatar className="h-12 w-12">
                <AvatarImage src={athlete.avatar} alt={athlete.name} />
                <AvatarFallback>{athlete.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-foreground">{athlete.name}</h3>
                  {athlete.status === "active" && (
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  )}
                  {athlete.status === "inactive" && (
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                  )}
                  {athlete.status === "training" && (
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span
                    className={cn(
                      athlete.status === "active" && "text-green-500",
                      athlete.status === "inactive" && "text-red-500",
                      athlete.status === "training" && "text-yellow-500"
                    )}
                  >
                    {athlete.status === "active" && "Attiva "}
                    {athlete.status === "inactive" && "Inattiva "}
                    {athlete.status === "training" && "Prova "}
                  </span>
                  {athlete.lastCheckIn}
                </p>
                <p className="text-xs text-muted-foreground">{athlete.checkInType}</p>
              </div>

              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
