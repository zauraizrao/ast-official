import {
  Home,
  Users,
  Calendar,
  ClipboardList,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import LogoImage from "@/lib/log 2.png";

interface SidebarProps {
  activeItem?: string;
}

const menuItems = [
  { id: "home", icon: Home, label: "Home", path: "/" },
  { id: "athletes", icon: Users, label: "Atleti", path: "/athletes" },
  { id: "trainers", icon: Calendar, label: "Allenatori", path: "/trainers" },
  { id: "plans", icon: ClipboardList, label: "Plans", path: "/plans" },
  { id: "chat", icon: MessageSquare, label: "Chat", path: "/chat" },
];

export const Sidebar = ({ activeItem = "home" }: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <aside className="w-28 bg-sidebar flex flex-col items-center py-8 gap-10">
      {/* Top Logo */}
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-black/40">
        <img src={LogoImage} alt="logo" className="w-10 h-10" />
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeItem;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center gap-2",
                "w-20", // only width; no box background
                "text-xs font-medium",
                isActive ? "text-white" : "text-gray-400 hover:text-white",
                "transition-transform duration-200 hover:scale-[1.03]"
              )}
            >
              {/* ONLY this circle has background now */}
              <div
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-full",
                  isActive
                    ? "bg-primary shadow-[0_0_25px_rgba(255,60,40,0.6)]"
                    : "bg-black/70"
                )}
              >
                <Icon className="w-5 h-5" />
              </div>

              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-4 mt-auto pb-4">
        <button className="flex flex-col items-center gap-2 w-20 text-gray-400 hover:text-white transition-transform duration-200 hover:scale-[1.03]">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/70">
            <Settings className="w-5 h-5" />
          </div>
          <span className="text-xs">Impostazioni</span>
        </button>

        <button className="flex flex-col items-center gap-2 w-20 text-gray-400 hover:text-white transition-transform duration-200 hover:scale-[1.03]">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/70">
            <LogOut className="w-5 h-5" />
          </div>
          <span className="text-xs">Esci</span>
        </button>
      </div>
    </aside>
  );
};
