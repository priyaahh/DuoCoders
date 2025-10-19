import React from "react";
import { MetricCard } from "../components/MetrixCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { mockClients, mockProfitability, aiRecommendations } from "../lib/mockData";

// Simple icon components
const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const AlertCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

export default function Dashboard() {
  const totalRevenue = mockClients.reduce((sum, client) => sum + client.revenue, 0);
  const avgSLA = mockClients.length ? mockClients.reduce((sum, client) => sum + client.slaCompliance, 0) / mockClients.length : 0;
  const criticalClients = mockClients.filter(c => c.status === "critical").length;

  return (
    <div className="min-h-screen bg-gradient-soft p-8 space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-primary bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground mt-2">Real-time insights into your MSP operations</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value={`$${(totalRevenue / 1000).toFixed(0)}K`}
          change="+12.5% from last month"
          changeType="positive"
          icon={DollarSign}
        />
        <MetricCard
          title="Active Clients"
          value={mockClients.length.toString()}
          change="+2 new this month"
          changeType="positive"
          icon={Users}
        />
        <MetricCard
          title="Avg SLA Compliance"
          value={`${avgSLA.toFixed(1)}%`}
          change="-2.1% from target"
          changeType={avgSLA >= 95 ? "positive" : "warning"}
          icon={TrendingUp}
        />
        <MetricCard
          title="Critical Alerts"
          value={criticalClients.toString()}
          change="Requires attention"
          changeType="negative"
          icon={AlertCircle}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="animate-scale-in shadow-medium border-border/50">
          <CardHeader>
            <CardTitle className="text-xl">Revenue & Profitability Trends</CardTitle>
            <CardDescription>6-month performance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-end justify-between gap-2">
              {mockProfitability.map((item) => (
                <div key={item.month} className="flex flex-col items-center gap-2">
                  <div className="w-8 bg-primary rounded-t" style={{ height: `${(item.revenue / 200) * 100}%` }}></div>
                  <div className="w-8 bg-success rounded-t" style={{ height: `${(item.profit / 100) * 100}%` }}></div>
                  <span className="text-xs text-muted-foreground">{item.month}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded"></div>
                <span>Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded"></div>
                <span>Profit</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-scale-in shadow-medium border-border/50">
          <CardHeader>
            <CardTitle className="text-xl">Client Revenue Distribution</CardTitle>
            <CardDescription>Top 5 clients by monthly revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-end justify-between gap-2">
              {mockClients.map((client) => (
                <div key={client.id} className="flex flex-col items-center gap-2">
                  <div 
                    className="w-12 bg-primary rounded-t" 
                    style={{ height: `${(client.revenue / 60000) * 100}%` }}
                  ></div>
                  <span className="text-xs text-muted-foreground text-center">{client.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Revenue in thousands ($)
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="animate-fade-in shadow-medium border-border/50 bg-gradient-to-br from-card to-accent/5">
        <CardHeader>
          <CardTitle className="text-xl">AI-Powered Recommendations</CardTitle>
          <CardDescription>Intelligent insights to optimize your business</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {aiRecommendations.map((rec) => (
              <div key={rec.id} className="flex items-start gap-4 p-4 border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300 hover:scale-[1.02]">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{rec.title}</h4>
                    <Badge
                      variant={
                        rec.priority === "critical"
                          ? "destructive"
                          : rec.priority === "high"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {rec.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                  <p className="text-sm font-medium text-success">{rec.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
