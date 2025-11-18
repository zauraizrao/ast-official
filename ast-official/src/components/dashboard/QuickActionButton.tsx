import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickActionButtonProps {
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

export const QuickActionButton = ({
  label,
  icon: Icon,
  onClick,
}: QuickActionButtonProps) => {
  const LeadingIcon = Icon ?? ArrowRight;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden",
        // keep it as small as the content instead of huge
        "inline-flex items-center gap-3",
        // smaller padding -> smaller button
        "px-6 py-2.5",
        // pill shape
        "rounded-full",
        // red gradient
        "bg-gradient-to-r from-red-500 to-red-700",
        // text
        "text-white font-semibold text-sm md:text-base",
        // subtle animation
        "transition-transform transition-shadow duration-300",
        "hover:scale-[1.02] hover:shadow-lg"
      )}
    >
      {/* Left circular icon */}
      <span
        className={cn(
          "flex items-center justify-center",
          // slightly smaller circle
          "w-7 h-7 rounded-full",
          "bg-black/50",
          "transition-colors duration-300 group-hover:bg-black/70"
        )}
      >
        <LeadingIcon className="w-3.5 h-3.5" />
      </span>

      {/* Label */}
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
};
