import { MetricCard } from "@/components/MetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, DollarSign, Server, Users } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const DataProvider = () => {
  const dataOfferings = [
    { name: "Financial Market Data", tables: 8, type: "Real-time", access: "Public", requests: 1234 },
    { name: "Weather & Climate", tables: 5, type: "Historical", access: "Private", requests: 567 },
    { name: "IoT Sensor Readings", tables: 12, type: "Stream", access: "Public", requests: 890 },
    { name: "Social Media Analytics", tables: 6, type: "Real-time", access: "Premium", requests: 445 },
    { name: "Supply Chain Events", tables: 10, type: "Event-sourced", access: "Private", requests: 678 },
  ];

  const clients = [
    { address: "0x742d...9a3f", requests: 234, revenue: "$1,245", status: "active" },
    { address: "0x8f3a...2c1d", requests: 189, revenue: "$987", status: "active" },
    { address: "0x1e4b...7d9c", requests: 156, revenue: "$823", status: "pending" },
    { address: "0x9c2f...4a8e", requests: 123, revenue: "$654", status: "active" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Data Provider Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your data offerings and client usage
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Clients"
          value="89"
          change="+12 this month"
          icon={Users}
          trend="up"
        />
        <MetricCard
          title="Total Requests"
          value="3,814"
          change="Last 30 days"
          icon={Server}
          trend="neutral"
        />
        <MetricCard
          title="Data Offerings"
          value="41"
          change="Across 5 categories"
          icon={Database}
          trend="neutral"
        />
        <MetricCard
          title="Revenue Generated"
          value="$18,429"
          change="+23% from last month"
          icon={DollarSign}
          trend="up"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Offerings</CardTitle>
          <CardDescription>Your available data sources and types</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data Source</TableHead>
                <TableHead>Tables</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Access</TableHead>
                <TableHead>Requests (30d)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataOfferings.map((offering) => (
                <TableRow key={offering.name}>
                  <TableCell className="font-medium">{offering.name}</TableCell>
                  <TableCell>{offering.tables}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{offering.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        offering.access === "Public"
                          ? "border-success/50 text-success"
                          : offering.access === "Private"
                          ? "border-warning/50 text-warning"
                          : "border-primary/50 text-primary"
                      }
                    >
                      {offering.access}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono">{offering.requests.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Clients</CardTitle>
            <CardDescription>Your highest-volume oracle clients</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client Address</TableHead>
                  <TableHead>Requests</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.address}>
                    <TableCell className="font-mono text-sm">{client.address}</TableCell>
                    <TableCell>{client.requests}</TableCell>
                    <TableCell className="font-bold text-success">{client.revenue}</TableCell>
                    <TableCell>
                      <StatusBadge status={client.status as any} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Analytics</CardTitle>
            <CardDescription>Earnings breakdown by data type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                { category: "Financial Market Data", percentage: 35, amount: "$6,450" },
                { category: "IoT Sensor Readings", percentage: 28, amount: "$5,160" },
                { category: "Supply Chain Events", percentage: 20, amount: "$3,686" },
                { category: "Weather & Climate", percentage: 10, amount: "$1,843" },
                { category: "Social Media Analytics", percentage: 7, amount: "$1,290" },
              ].map((item) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-success font-bold">{item.amount}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Quality Metrics</CardTitle>
          <CardDescription>Ensuring high-quality data delivery</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Uptime</div>
            <div className="text-2xl font-bold text-success">99.97%</div>
            <div className="text-xs text-muted-foreground">Last 30 days</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Avg Response Time</div>
            <div className="text-2xl font-bold">234ms</div>
            <div className="text-xs text-muted-foreground">-12ms improvement</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Data Freshness</div>
            <div className="text-2xl font-bold text-primary">Real-time</div>
            <div className="text-xs text-muted-foreground">&lt; 500ms latency</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataProvider;
