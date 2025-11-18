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
    // main container: card on the dashboard, NOT a right sidebar
    <aside
      className="
        w-96
        rounded-3xl
        bg-card/90
        p-6
        flex flex-col
        shadow-[0_0_40px_rgba(0,0,0,0.6)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Notifiche</h2>

        <button className="text-sm text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1">
          Visualizza tutto
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Notification list */}
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="
              rounded-2xl
              bg-black/40
              px-4 py-3
              flex items-center gap-3
              cursor-pointer
              transition-all
              hover:bg-black/60
            "
          >
            {/* Icon circle */}
            <div className="w-9 h-9 rounded-full bg-black/70 flex items-center justify-center flex-shrink-0">
              <Bell className="w-4 h-4 text-gray-300" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm text-foreground mb-1">
                {notification.title}
              </h4>
              <p className="text-xs text-muted-foreground truncate">
                {notification.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
