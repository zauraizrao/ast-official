import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { QuickActionButton } from "@/components/dashboard/QuickActionButton";
import { AISuggestion } from "@/components/dashboard/AISuggestion";
import { GrowthChart } from "@/components/dashboard/GrowthChart";
import { NotificationPanel } from "@/components/dashboard/NotificationPanel";
import { Clock, Users, Sparkles, FileCheck, Plus } from "lucide-react";


const Index = () => {
  
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeItem="home" />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-8">
            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DashboardCard
                title="Pending Check-In"
                subtitle="12 athletes"
                badge="12 athletes"
                icon={Clock}
                variant="highlighted"
                progress={75}
              />
              <DashboardCard
                title="Active Athletes"
                subtitle="8 Athletes"
                badge="8 Athletes"
                icon={Users}
              />
              <DashboardCard
                title="AI Intelligence Suggestions"
                subtitle="5 Suggestions"
                badge="5 Suggestions"
                icon={Sparkles}
              />
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <QuickActionButton label="Review Check-Ins" icon={FileCheck} />
                <QuickActionButton label="New Plans" icon={Plus} />
              </div>
            </div>

            {/* AI Suggestion */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-foreground">AI Suggestion</h2>
                  <button className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                    View All
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  <AISuggestion
                    day="Day 1: Full Body"
                    exercises={["Squat", "Deadlift", "Thighs"]}
                  />
                  <AISuggestion
                    day="Day 2: Lower Body"
                    exercises={["Glutes", "Alternates"]}
                  />
                  <AISuggestion
                    day="Day 3: Upper Body"
                    exercises={["Chest", "Pull-ups"]}
                  />
                </div>
              </div>

              <div>
                <GrowthChart />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Notification Panel */}
      <NotificationPanel />
    </div>
  );
};

export default Index;
