import { MetricCard } from "@/components/MetricCard";
import { Activity, Database, DollarSign, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Network Overview</h1>
        <p className="text-muted-foreground">
          Monitor your decentralized oracle network in real-time
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Requests"
          value="5,521"
          change="+12.5% from last month"
          icon={Activity}
          trend="up"
        />
        <MetricCard
          title="Active Oracles"
          value="234"
          change="+5 new this week"
          icon={Server}
          trend="up"
        />
        <MetricCard
          title="Data Sources"
          value="48"
          change="Connected providers"
          icon={Database}
          trend="neutral"
        />
        <MetricCard
          title="Total Value Secured"
          value="$42.27B"
          change="-18.8% from last year"
          icon={DollarSign}
          trend="down"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Network Status</CardTitle>
            <CardDescription>Current health of the oracle network</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Consensus Layer</span>
              <Badge className="bg-success/20 text-success border-success/30">
                <div className="w-1.5 h-1.5 rounded-full bg-success mr-1.5" />
                Operational
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Network Interoperability</span>
              <Badge className="bg-success/20 text-success border-success/30">
                <div className="w-1.5 h-1.5 rounded-full bg-success mr-1.5" />
                Active
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Data Availability</span>
              <Badge className="bg-success/20 text-success border-success/30">
                <div className="w-1.5 h-1.5 rounded-full bg-success mr-1.5" />
                99.9% Uptime
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Off-Chain Processing</span>
              <Badge className="bg-warning/20 text-warning border-warning/30">
                <div className="w-1.5 h-1.5 rounded-full bg-warning mr-1.5" />
                High Load
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest oracle network events</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium">New data provider connected</p>
                <p className="text-xs text-muted-foreground">Financial API Gateway - 2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-success mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium">Contract request fulfilled</p>
                <p className="text-xs text-muted-foreground">0x742d...9a3f - 5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium">Oracle node joined network</p>
                <p className="text-xs text-muted-foreground">Node #235 - 12 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-success mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium">ZK Proof verified</p>
                <p className="text-xs text-muted-foreground">Batch #1247 - 18 minutes ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Supported Blockchains</CardTitle>
          <CardDescription>Multi-chain oracle network connections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["Ethereum", "Polygon", "Arbitrum", "Optimism", "Base", "zkSync", "Avalanche", "BSC"].map((chain) => (
              <Badge key={chain} variant="secondary" className="px-3 py-1">
                {chain}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
