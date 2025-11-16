import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const data = [
  { date: "Jan 1", trainers: 320, athletes: 280 },
  { date: "Jan 7", trainers: 340, athletes: 290 },
  { date: "Jan 14", trainers: 380, athletes: 310 },
  { date: "Jan 21", trainers: 420, athletes: 340 },
  { date: "Jan 28", trainers: 480, athletes: 380 },
  { date: "Feb 4", trainers: 520, athletes: 410 },
  { date: "Feb 11", trainers: 480, athletes: 390 },
  { date: "Feb 18", trainers: 520, athletes: 420 },
  { date: "Feb 25", trainers: 580, athletes: 460 },
  { date: "Mar 4", trainers: 620, athletes: 490 },
  { date: "Mar 11", trainers: 680, athletes: 520 },
  { date: "Mar 18", trainers: 720, athletes: 560 },
  { date: "Mar 25", trainers: 780, athletes: 600 },
  { date: "Apr 1", trainers: 820, athletes: 640 },
];

export const GrowthChart = () => {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Growth Overview</h3>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-chart-1" />
          <span className="text-sm text-muted-foreground">Trainers</span>
          <span className="text-sm font-semibold text-foreground">703</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-chart-2" />
          <span className="text-sm text-muted-foreground">Athletes</span>
          <span className="text-sm font-semibold text-foreground">378</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="trainers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="athletes" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis
            dataKey="date"
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            tickLine={false}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Area
            type="monotone"
            dataKey="trainers"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#trainers)"
          />
          <Area
            type="monotone"
            dataKey="athletes"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#athletes)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
