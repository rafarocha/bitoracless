import { MetricCard } from "@/components/MetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, FileCode, TrendingUp, Zap } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ContractMonitor = () => {
  const contracts = [
    { id: "0x742d...9a3f", status: "success", requests: 234, latency: "1.2s", provider: "Financial API" },
    { id: "0x8f3a...2c1d", status: "active", requests: 189, latency: "0.8s", provider: "Weather Data" },
    { id: "0x1e4b...7d9c", status: "pending", requests: 12, latency: "2.5s", provider: "IoT Sensors" },
    { id: "0x9c2f...4a8e", status: "success", requests: 567, latency: "0.9s", provider: "Market Data" },
    { id: "0x5d8a...6e3f", status: "error", requests: 45, latency: "5.2s", provider: "Blockchain Data" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Contract Monitor</h1>
        <p className="text-muted-foreground">
          Monitor on-chain contract processing and oracle fulfillment
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Contracts"
          value="127"
          change="+8 this week"
          icon={FileCode}
          trend="up"
        />
        <MetricCard
          title="Fulfilled Requests"
          value="1,047"
          change="Last 24 hours"
          icon={CheckCircle2}
          trend="neutral"
        />
        <MetricCard
          title="Avg Response Time"
          value="1.4s"
          change="-0.3s improvement"
          icon={Zap}
          trend="up"
        />
        <MetricCard
          title="Success Rate"
          value="98.7%"
          change="+0.5% from last week"
          icon={TrendingUp}
          trend="up"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contract Execution Lifecycle</CardTitle>
          <CardDescription>Real-time monitoring of your smart contracts</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contract Address</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Requests (24h)</TableHead>
                <TableHead>Avg Latency</TableHead>
                <TableHead>Data Provider</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell className="font-mono text-sm">{contract.id}</TableCell>
                  <TableCell>
                    <StatusBadge status={contract.status as any} />
                  </TableCell>
                  <TableCell>{contract.requests}</TableCell>
                  <TableCell>{contract.latency}</TableCell>
                  <TableCell>{contract.provider}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>SRE Metrics</CardTitle>
            <CardDescription>Service reliability engineering indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Service Level Indicator (SLI)</span>
              <span className="text-sm font-bold text-success">98.7%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-success h-2 rounded-full" style={{ width: "98.7%" }} />
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium">Error Budget</span>
              <span className="text-sm font-bold text-primary">76% remaining</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "76%" }} />
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium">Mean Time to Recovery</span>
              <span className="text-sm font-bold">12 minutes</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Source Selection</CardTitle>
            <CardDescription>Configure your preferred providers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Financial API Gateway", status: "active", requests: 432 },
              { name: "Weather Data Provider", status: "active", requests: 189 },
              { name: "IoT Sensor Network", status: "pending", requests: 12 },
              { name: "Market Data Feed", status: "active", requests: 567 },
            ].map((source) => (
              <div key={source.name} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${source.status === 'active' ? 'bg-success' : 'bg-warning'}`} />
                  <div>
                    <p className="text-sm font-medium">{source.name}</p>
                    <p className="text-xs text-muted-foreground">{source.requests} requests/day</p>
                  </div>
                </div>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContractMonitor;
