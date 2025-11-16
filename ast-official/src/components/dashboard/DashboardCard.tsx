import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  badge?: string;
  imageSrc?: string;
  variant?: "default" | "highlighted";
  progress?: number;
}

export const DashboardCard = ({
  title,
  subtitle,
  icon: Icon,
  badge,
  imageSrc,
  variant = "default",
  progress,
}: DashboardCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 h-48 flex flex-col justify-between transition-all hover:scale-105",
        variant === "highlighted"
          ? "bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary"
          : "bg-card border border-border"
      )}
    >
      {/* Background Image */}
      {imageSrc && (
        <div className="absolute inset-0 opacity-20">
          <img src={imageSrc} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex items-center justify-between">
        {badge && (
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 backdrop-blur-sm">
            {Icon && <Icon className="w-4 h-4 text-primary" />}
            <span className="text-sm font-medium text-foreground">{badge}</span>
          </div>
        )}
        {progress !== undefined && (
          <div className="flex-1 ml-4">
            <div className="w-full h-2 bg-background/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
