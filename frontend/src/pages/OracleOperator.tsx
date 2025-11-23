import { MetricCard } from "@/components/MetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, DollarSign, Network, Wallet, Shield } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const OracleOperator = () => {
  const blockchains = [
    { name: "Ethereum", requests: 234, earnings: "2.45 ETH", status: "active" },
    { name: "Polygon", requests: 189, earnings: "450 MATIC", status: "active" },
    { name: "Arbitrum", requests: 156, earnings: "1.89 ETH", status: "active" },
    { name: "Optimism", requests: 98, earnings: "1.23 ETH", status: "pending" },
  ];

  const databases = [
    { name: "PostgreSQL Connector", tables: 12, requests: 456, status: "active" },
    { name: "MongoDB Connector", tables: 8, requests: 234, status: "active" },
    { name: "Redis Cache", tables: 5, requests: 789, status: "active" },
    { name: "MySQL Connector", tables: 15, requests: 123, status: "error" },
  ];

  const complianceData = [
    { name: "Data Availability", value: 35, color: "hsl(var(--success))" },
    { name: "State Validation", value: 25, color: "hsl(var(--primary))" },
    { name: "Sequencer Failure", value: 20, color: "hsl(var(--warning))" },
    { name: "Proposer Failure", value: 20, color: "hsl(var(--chart-2))" },
  ];

  const chainContracts = [
    { 
      chain: "Ethereum", 
      icon: "Ξ",
      contracts: 12, 
      compliance: "Optimistic",
      stage: "STAGE 1",
      dataAvailability: "Onchain",
      stateValidation: "Fraud proofs (INT)",
      exitWindow: "7d"
    },
    { 
      chain: "Polygon", 
      icon: "◈",
      contracts: 8, 
      compliance: "Optimistic",
      stage: "STAGE 1",
      dataAvailability: "Onchain",
      stateValidation: "Fraud proofs (INT)",
      exitWindow: "7d"
    },
    { 
      chain: "Arbitrum", 
      icon: "▲",
      contracts: 15, 
      compliance: "Optimistic",
      stage: "STAGE 1",
      dataAvailability: "Onchain",
      stateValidation: "Fraud proofs (INT)",
      exitWindow: "10d"
    },
    { 
      chain: "Optimism", 
      icon: "●",
      contracts: 6, 
      compliance: "Optimistic",
      stage: "STAGE 0",
      dataAvailability: "Onchain",
      stateValidation: "Self propose",
      exitWindow: "7d"
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Oracle Operator Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your oracle node performance and earnings
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Earnings"
          value="$12,847"
          change="+$1,234 this month"
          icon={DollarSign}
          trend="up"
        />
        <MetricCard
          title="Requests Processed"
          value="677"
          change="Last 24 hours"
          icon={Cpu}
          trend="neutral"
        />
        <MetricCard
          title="Connected Chains"
          value="8"
          change="Multi-chain active"
          icon={Network}
          trend="neutral"
        />
        <MetricCard
          title="Data Sources"
          value="24"
          change="+3 new connectors"
          icon={Database}
          trend="up"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              Wallet & Earnings
            </CardTitle>
            <CardDescription>Your token earnings across all chains</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30">
              <div className="text-sm text-muted-foreground mb-1">Total Balance</div>
              <div className="text-2xl font-bold text-primary">$12,847.32</div>
              <div className="text-xs text-muted-foreground mt-2">
                Wallet: 0x742d35ce...9a3f
              </div>
            </div>

            <div className="space-y-3">
              {blockchains.map((chain) => (
                <div key={chain.name} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                  <div>
                    <p className="text-sm font-medium">{chain.name}</p>
                    <p className="text-xs text-muted-foreground">{chain.requests} requests/day</p>
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
            <CardTitle>Processing Metrics</CardTitle>
            <CardDescription>Real-time performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">CPU Usage</span>
              <span className="text-sm font-bold">67%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-warning h-2 rounded-full" style={{ width: "67%" }} />
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium">Memory Usage</span>
              <span className="text-sm font-bold">4.2 GB / 8 GB</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-success h-2 rounded-full" style={{ width: "52.5%" }} />
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium">Network Throughput</span>
              <span className="text-sm font-bold">234 MB/s</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }} />
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium">Success Rate</span>
              <span className="text-sm font-bold text-success">98.2%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Database Connectors</CardTitle>
          <CardDescription>Connected data sources for oracle requests</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Connector</TableHead>
                <TableHead>Tables</TableHead>
                <TableHead>Requests Fulfilled</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {databases.map((db) => (
                <TableRow key={db.name}>
                  <TableCell className="font-medium">{db.name}</TableCell>
                  <TableCell>{db.tables}</TableCell>
                  <TableCell>{db.requests}</TableCell>
                  <TableCell>
                    <StatusBadge status={db.status as any} />
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      {db.status === 'error' ? 'Degraded' : 'Optimal'}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Connected Blockchains</CardTitle>
          <CardDescription>Multi-chain oracle network participation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["Ethereum", "Polygon", "Arbitrum", "Optimism", "Base", "zkSync", "Avalanche", "BSC"].map((chain) => (
              <Badge key={chain} variant="outline" className="px-3 py-2 border-primary/50">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                {chain}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Compliance Analysis
          </CardTitle>
          <CardDescription>Risk analysis and contract fulfillment status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase">Risk Distribution</h3>
              <ChartContainer
                config={{
                  dataAvailability: {
                    label: "Data Availability",
                    color: "hsl(var(--success))",
                  },
                  stateValidation: {
                    label: "State Validation",
                    color: "hsl(var(--primary))",
                  },
                  sequencerFailure: {
                    label: "Sequencer Failure",
                    color: "hsl(var(--warning))",
                  },
                  proposerFailure: {
                    label: "Proposer Failure",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[250px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={complianceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {complianceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase">Key Metrics</h3>
              {complianceData.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold">{item.value}%</span>
                </div>
              ))}
              <div className="pt-3 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Sequencer Failure</span>
                  <span className="text-sm font-bold text-success">Self sequence</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-muted-foreground">Data Availability</span>
                  <span className="text-sm font-bold text-success">Onchain</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contract Fulfillment by Chain</CardTitle>
          <CardDescription>Active contracts being processed on each blockchain with compliance analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Chain</TableHead>
                <TableHead>Compliance Status</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Active Contracts</TableHead>
                <TableHead>Earnings</TableHead>
                <TableHead>Success Rate</TableHead>
                <TableHead>State Validation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {chainContracts.map((chain, index) => {
                const chainCompliance = [
                  { name: "DA", value: 30, color: "hsl(var(--success))" },
                  { name: "SV", value: 25, color: "hsl(var(--primary))" },
                  { name: "SF", value: 25, color: "hsl(var(--warning))" },
                  { name: "PF", value: 20, color: "hsl(var(--chart-2))" },
                ];
                
                return (
                  <TableRow key={chain.chain}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{chain.icon}</span>
                        <span className="font-medium">{chain.chain}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <ChartContainer
                          config={{
                            da: { label: "Data Availability", color: "hsl(var(--success))" },
                            sv: { label: "State Validation", color: "hsl(var(--primary))" },
                            sf: { label: "Sequencer Failure", color: "hsl(var(--warning))" },
                            pf: { label: "Proposer Failure", color: "hsl(var(--chart-2))" },
                          }}
                          className="h-[40px] w-[40px]"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={chainCompliance}
                                cx="50%"
                                cy="50%"
                                innerRadius={8}
                                outerRadius={16}
                                paddingAngle={2}
                                dataKey="value"
                              >
                                {chainCompliance.map((entry, i) => (
                                  <Cell key={`cell-${i}`} fill={entry.color} />
                                ))}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                        <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                          {chain.compliance}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-warning/20 text-warning border-warning/30 font-bold">
                        {chain.stage}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-bold text-primary">{chain.contracts}</TableCell>
                    <TableCell className="text-sm font-bold text-success">
                      +{blockchains[index]?.earnings || "N/A"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-success">
                          {index === 0 ? "99.2%" : index === 1 ? "98.7%" : index === 2 ? "99.5%" : "97.8%"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-success">{chain.stateValidation}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default OracleOperator;
