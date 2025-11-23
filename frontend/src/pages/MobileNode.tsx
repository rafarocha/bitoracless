import { MetricCard } from "@/components/MetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Battery, Wifi, Database, DollarSign, Cpu, HardDrive } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";

const MobileNode = () => {
  const blockchains = [
    { name: "Ethereum", requests: 45, earnings: "0.12 ETH", status: "active" },
    { name: "Polygon", requests: 67, earnings: "89 MATIC", status: "active" },
    { name: "Arbitrum", requests: 34, earnings: "0.08 ETH", status: "active" },
  ];

  const batteryData = [
    { time: "00:00", level: 100 },
    { time: "04:00", level: 92 },
    { time: "08:00", level: 78 },
    { time: "12:00", level: 64 },
    { time: "16:00", level: 51 },
    { time: "20:00", level: 42 },
    { time: "24:00", level: 35 },
  ];

  const networkData = [
    { time: "00:00", usage: 12 },
    { time: "04:00", usage: 18 },
    { time: "08:00", usage: 45 },
    { time: "12:00", usage: 67 },
    { time: "16:00", usage: 52 },
    { time: "20:00", usage: 38 },
    { time: "24:00", usage: 25 },
  ];

  const resourceAllocation = [
    { name: "Oracle Processing", value: 45, color: "hsl(var(--primary))" },
    { name: "Network Sync", value: 25, color: "hsl(var(--success))" },
    { name: "Background", value: 20, color: "hsl(var(--chart-2))" },
    { name: "Idle", value: 10, color: "hsl(var(--muted))" },
  ];

  const databases = [
    { name: "PostgreSQL Lite", tables: 4, requests: 89, status: "active", dataUsage: "12 MB" },
    { name: "SQLite Local", tables: 3, requests: 67, status: "active", dataUsage: "8 MB" },
    { name: "Redis Cache", tables: 2, requests: 145, status: "active", dataUsage: "5 MB" },
  ];

  const deviceInfo = {
    model: "iPhone 14 Pro",
    os: "iOS 17.2",
    storage: "45.2 GB / 128 GB",
    uptime: "12h 34m",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Mobile & IoT Node Dashboard</h1>
        <p className="text-muted-foreground">
          Lightweight oracle node optimized for mobile and IoT devices
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Battery Level"
          value="35%"
          change="7h remaining"
          icon={Battery}
          trend="down"
        />
        <MetricCard
          title="Network Usage"
          value="234 MB"
          change="Last 24 hours"
          icon={Wifi}
          trend="neutral"
        />
        <MetricCard
          title="Earnings (24h)"
          value="$42.50"
          change="+146 requests"
          icon={DollarSign}
          trend="up"
        />
        <MetricCard
          title="Active Chains"
          value="3"
          change="Light mode active"
          icon={Smartphone}
          trend="neutral"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Battery className="h-5 w-5 text-warning" />
              Battery Consumption
            </CardTitle>
            <CardDescription>24-hour battery usage tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                level: {
                  label: "Battery Level",
                  color: "hsl(var(--warning))",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={batteryData}>
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="level" 
                    stroke="hsl(var(--warning))" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border border-border/50">
                <p className="text-xs text-muted-foreground">Estimated Time</p>
                <p className="text-lg font-bold text-warning">7h 12m</p>
              </div>
              <div className="p-3 rounded-lg border border-border/50">
                <p className="text-xs text-muted-foreground">Power Mode</p>
                <Badge variant="outline" className="mt-1 bg-success/10 text-success border-success/30">
                  Low Power
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="h-5 w-5 text-primary" />
              Network Consumption
            </CardTitle>
            <CardDescription>Data usage over last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                usage: {
                  label: "Data Usage (MB)",
                  color: "hsl(var(--primary))",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={networkData}>
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="usage" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border border-border/50">
                <p className="text-xs text-muted-foreground">Total Usage</p>
                <p className="text-lg font-bold text-primary">234 MB</p>
              </div>
              <div className="p-3 rounded-lg border border-border/50">
                <p className="text-xs text-muted-foreground">Connection</p>
                <Badge variant="outline" className="mt-1 bg-success/10 text-success border-success/30">
                  WiFi
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary" />
              Device Information
            </CardTitle>
            <CardDescription>Current device specifications and status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 rounded-lg bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Model</p>
                  <p className="text-sm font-bold">{deviceInfo.model}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">OS Version</p>
                  <p className="text-sm font-bold">{deviceInfo.os}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Storage</p>
                  <p className="text-sm font-bold">{deviceInfo.storage}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Uptime</p>
                  <p className="text-sm font-bold text-success">{deviceInfo.uptime}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">CPU Usage</span>
                <span className="text-sm font-bold">23%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: "23%" }} />
              </div>

              <div className="flex items-center justify-between mt-3">
                <span className="text-sm font-medium">Memory</span>
                <span className="text-sm font-bold">1.2 GB / 4 GB</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "30%" }} />
              </div>

              <div className="flex items-center justify-between mt-3">
                <span className="text-sm font-medium">Storage Cache</span>
                <span className="text-sm font-bold">425 MB</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-warning h-2 rounded-full" style={{ width: "15%" }} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-success" />
              Resource Allocation
            </CardTitle>
            <CardDescription>How device resources are being used</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ChartContainer
                config={{
                  processing: {
                    label: "Oracle Processing",
                    color: "hsl(var(--primary))",
                  },
                  sync: {
                    label: "Network Sync",
                    color: "hsl(var(--success))",
                  },
                  background: {
                    label: "Background",
                    color: "hsl(var(--chart-2))",
                  },
                  idle: {
                    label: "Idle",
                    color: "hsl(var(--muted))",
                  },
                }}
                className="h-[180px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={resourceAllocation}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {resourceAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>

              <div className="space-y-2">
                {resourceAllocation.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-2 rounded-lg border border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <span className="text-sm font-bold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-success" />
            Connected Blockchains & Earnings
          </CardTitle>
          <CardDescription>Active chains and earnings from oracle processing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-gradient-to-r from-success/20 to-success/5 border border-success/30">
            <div className="text-sm text-muted-foreground mb-1">Total Earnings (24h)</div>
            <div className="text-2xl font-bold text-success">$42.50</div>
            <div className="text-xs text-muted-foreground mt-2">
              146 requests processed
            </div>
          </div>

          <div className="space-y-3">
            {blockchains.map((chain) => (
              <div key={chain.name} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                <div>
                  <p className="text-sm font-medium">{chain.name}</p>
                  <p className="text-xs text-muted-foreground">{chain.requests} requests today</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-success">+{chain.earnings}</p>
                  <StatusBadge status={chain.status as any} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Local Database Connectors
          </CardTitle>
          <CardDescription>Lightweight data sources optimized for mobile</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Connector</TableHead>
                <TableHead>Tables</TableHead>
                <TableHead>Requests</TableHead>
                <TableHead>Data Usage</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {databases.map((db) => (
                <TableRow key={db.name}>
                  <TableCell className="font-medium">{db.name}</TableCell>
                  <TableCell>{db.tables}</TableCell>
                  <TableCell>{db.requests}</TableCell>
                  <TableCell className="text-primary font-medium">{db.dataUsage}</TableCell>
                  <TableCell>
                    <StatusBadge status={db.status as any} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Optimization Tips</CardTitle>
          <CardDescription>Recommendations for mobile oracle nodes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-4 rounded-lg border border-success/30 bg-success/5">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-success/20 text-success border-success/40">
                  Active
                </Badge>
                <span className="text-sm font-medium">Low Power Mode</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Reduces CPU usage and extends battery life by 40%
              </p>
            </div>

            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary/40">
                  Active
                </Badge>
                <span className="text-sm font-medium">WiFi Only Mode</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Process requests only on WiFi to save mobile data
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">Suggested</Badge>
                <span className="text-sm font-medium">Background Sync</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Enable background sync during charging for optimal earnings
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">Suggested</Badge>
                <span className="text-sm font-medium">Cache Optimization</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Clear cache weekly to maintain optimal performance
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileNode;
