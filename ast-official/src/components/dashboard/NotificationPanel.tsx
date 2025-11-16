import { Bell, ChevronRight } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  description: string;
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Delayed Check-In",
    description: "Athlete John Doe has not submitted check-in",
  },
  {
    id: "2",
    title: "New Plan: Upper Body Part",
    description: "AI has generated a new plan",
  },
  {
    id: "3",
    title: "Check-In Sent",
    description: "Athlete Jane Roe has sent",
  },
];

export const NotificationPanel = () => {
  return (
    <aside className="w-80 bg-sidebar border-l border-sidebar-border p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
        <button className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
          View All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4 flex-1">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Bell className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground mb-1 text-sm">{notification.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{notification.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
