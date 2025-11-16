import { User } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-border">
      <h1 className="text-2xl font-bold text-foreground">Control Panel Coach Dashboard</h1>
      <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-all">
        <User className="w-5 h-5 text-foreground" />
      </button>
    </header>
  );
};
