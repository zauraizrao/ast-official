import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickActionButtonProps {
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

export const QuickActionButton = ({ label, icon: Icon, onClick }: QuickActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden",
        "flex items-center justify-between gap-3 px-6 py-4 rounded-xl",
        "bg-gradient-to-r from-primary to-primary/90",
        "text-primary-foreground font-semibold",
        "transition-all duration-300",
        "hover:shadow-[0_0_30px_rgba(255,68,51,0.4)]",
        "hover:scale-105"
      )}
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5" />}
        <span>{label}</span>
      </div>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
};
