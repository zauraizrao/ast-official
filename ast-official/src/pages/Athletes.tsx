import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { AthleteList } from "@/components/athletes/AthleteList";
import { AthleteDetail } from "@/components/athletes/AthleteDetail";
import { AthleteEmptyState } from "@/components/athletes/AthleteEmptyState";
import { Search, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";

export interface Athlete {
  id: string;
  name: string;
  avatar: string;
  status: "active" | "inactive" | "training";
  lastCheckIn: string;
  checkInType: string;
  age: number;
  gender: string;
  weight: string;
  height: string;
  subscription: string;
  subscriptionExpiry: string;
  progress: number;
}

const mockAthletes: Athlete[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    status: "active",
    lastCheckIn: "Ultimo check-in Sep.20",
    checkInType: "PRO (esp. Oct 20)",
    age: 30,
    gender: "Maschio",
    weight: "60kg",
    height: "6'1",
    subscription: "Pro",
    subscriptionExpiry: "October 20",
    progress: 85,
  },
  {
    id: "2",
    name: "Mitchel Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mitchel",
    status: "inactive",
    lastCheckIn: "Ultimo check-in Sep.20",
    checkInType: "PRO (esp. Oct 20)",
    age: 28,
    gender: "Maschio",
    weight: "75kg",
    height: "5'11",
    subscription: "Pro",
    subscriptionExpiry: "November 15",
    progress: 62,
  },
  {
    id: "3",
    name: "Max William",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Max",
    status: "active",
    lastCheckIn: "Ultimo check-in Sep.20",
    checkInType: "PRO (esp. Oct 20)",
    age: 25,
    gender: "Maschio",
    weight: "82kg",
    height: "6'2",
    subscription: "Basic",
    subscriptionExpiry: "December 1",
    progress: 78,
  },
  {
    id: "4",
    name: "David Warner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    status: "inactive",
    lastCheckIn: "Ultimo check-in Aug.28",
    checkInType: "PRO (esp. Oct 20)",
    age: 32,
    gender: "Maschio",
    weight: "70kg",
    height: "5'10",
    subscription: "Pro",
    subscriptionExpiry: "September 30",
    progress: 45,
  },
  {
    id: "5",
    name: "Emily Carter",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    status: "active",
    lastCheckIn: "Ultimo check-in Sep.20",
    checkInType: "PRO (esp. Oct 20)",
    age: 24,
    gender: "Femmina",
    weight: "58kg",
    height: "5'6",
    subscription: "Pro",
    subscriptionExpiry: "October 25",
    progress: 91,
  },
  {
    id: "6",
    name: "Chris Brown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris",
    status: "training",
    lastCheckIn: "Ultimo check-in Sep.20",
    checkInType: "PRO (esp. Oct 20)",
    age: 29,
    gender: "Maschio",
    weight: "88kg",
    height: "6'3",
    subscription: "Basic",
    subscriptionExpiry: "November 10",
    progress: 72,
  },
  {
    id: "7",
    name: "Joe Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joe",
    status: "active",
    lastCheckIn: "Ultimo check-in Sep.20",
    checkInType: "PRO (esp. Oct 20)",
    age: 27,
    gender: "Maschio",
    weight: "73kg",
    height: "5'11",
    subscription: "Pro",
    subscriptionExpiry: "December 5",
    progress: 88,
  },
  {
    id: "8",
    name: "Harper",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harper",
    status: "inactive",
    lastCheckIn: "Scorso Check-in Aug.28",
    checkInType: "PRO (esp. Oct 20)",
    age: 31,
    gender: "Femmina",
    weight: "62kg",
    height: "5'7",
    subscription: "Basic",
    subscriptionExpiry: "October 15",
    progress: 56,
  },
];

const Athletes = () => {
  const [selectedAthlete, setSelectedAthlete] = useState<Athlete | null>(null);
  const [activeFilter, setActiveFilter] = useState("tutto");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAthletes = mockAthletes.filter((athlete) => {
    const matchesSearch = athlete.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "tutto" ||
      (activeFilter === "attiva" && athlete.status === "active") ||
      (activeFilter === "inattiva" && athlete.status === "inactive") ||
      (activeFilter === "training" && athlete.status === "training");
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar activeItem="athletes" />

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <h1 className="text-xl font-semibold text-foreground">Atlete</h1>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Cerca"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-muted border-0"
            />
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* Athletes List */}
          <AthleteList
            athletes={filteredAthletes}
            selectedAthlete={selectedAthlete}
            onSelectAthlete={setSelectedAthlete}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Athlete Detail or Empty State */}
          <div className="flex-1 bg-background overflow-y-auto">
            {selectedAthlete ? (
              <AthleteDetail athlete={selectedAthlete} />
            ) : (
              <AthleteEmptyState />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Athletes;
