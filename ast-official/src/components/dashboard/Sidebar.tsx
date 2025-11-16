import { Home, Users, Calendar, ClipboardList, MessageSquare, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import LogoImage from '@lib/log 2.png';


interface SidebarProps {
  activeItem?: string;
}

const menuItems = [
  { id: "home", icon: Home, label: "Home", path: "/" },
  { id: "athletes", icon: Users, label: "Athletes", path: "/athletes" },
  { id: "trainers", icon: Calendar, label: "Trainers", path: "/trainers" },
  { id: "plans", icon: ClipboardList, label: "Plans", path: "/plans" },
  { id: "chat", icon: MessageSquare, label: "Chat", path: "/chat" },
];

export const Sidebar = ({ activeItem = "home" }: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <aside className="w-24 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-6 gap-8">
      {/* Logo */}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary">
        <span className="text-primary-foreground font-bold text-lg"><img src="{LogoImage}" alt="" /></span>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeItem;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-xl transition-all",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-2">
        <button className="flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-xl text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-all">
          <Settings className="w-6 h-6" />
          <span className="text-xs">Settings</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-xl text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-all">
          <LogOut className="w-6 h-6" />
          <span className="text-xs">Exit</span>
        </button>
      </div>
    </aside>
  );
};
