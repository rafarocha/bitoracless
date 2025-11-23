import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, TrendingUp, Zap } from "lucide-react";

const NetworkActivity = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Network Activity</h1>
        <p className="text-muted-foreground">
          Real-time activity across the oracle network
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard
          title="Operations Per Second"
          value="5,521"
          change="Peak: 6,234"
          icon={Zap}
          trend="up"
        />
        <MetricCard
          title="Network Throughput"
          value="1.2 GB/s"
          change="Across all nodes"
          icon={Activity}
          trend="neutral"
        />
        <MetricCard
          title="Active Connections"
          value="892"
          change="+45 new today"
          icon={TrendingUp}
          trend="up"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activity Timeline</CardTitle>
          <CardDescription>Live network event stream</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-start gap-3 pb-4 border-b border-border/50 last:border-0">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse" />
              <div className="flex-1">
                <p className="text-sm font-medium">Request fulfilled on Ethereum</p>
                <p className="text-xs text-muted-foreground">
                  Contract 0x742d...9a3f • Node #234 • {i + 1} minute{i !== 0 && 's'} ago
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default NetworkActivity;
