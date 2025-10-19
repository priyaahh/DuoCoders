export type Client = {
  id: string;
  name: string;
  revenue: number;
  slaCompliance: number;
  status: "ok" | "warning" | "critical";
};

export const mockClients: Client[] = [
  { id: "c1", name: "Acme Corp", revenue: 42000, slaCompliance: 96.5, status: "ok" },
  { id: "c2", name: "Globex", revenue: 38000, slaCompliance: 92.3, status: "warning" },
  { id: "c3", name: "Soylent", revenue: 51000, slaCompliance: 97.1, status: "ok" },
  { id: "c4", name: "Initech", revenue: 33000, slaCompliance: 88.4, status: "critical" },
  { id: "c5", name: "Umbrella", revenue: 29000, slaCompliance: 94.8, status: "warning" },
];

export const mockProfitability = [
  { month: "May", revenue: 120, profit: 42 },
  { month: "Jun", revenue: 132, profit: 48 },
  { month: "Jul", revenue: 140, profit: 52 },
  { month: "Aug", revenue: 150, profit: 55 },
  { month: "Sep", revenue: 162, profit: 61 },
  { month: "Oct", revenue: 171, profit: 66 },
];

export const aiRecommendations = [
  {
    id: "r1",
    title: "Renegotiate contract with Globex",
    description: "SLA breaches increased 7% MoM; propose tiered response times.",
    impact: "+$8k MRR potential",
    priority: "high",
  },
  {
    id: "r2",
    title: "Automate patching for Initech",
    description: "High-critical alerts correlate with missed patch windows.",
    impact: "-35% incidents expected",
    priority: "critical",
  },
  {
    id: "r3",
    title: "Introduce premium support add-on",
    description: "Top clients show willingness to pay for faster SLAs.",
    impact: "+$12k MRR potential",
    priority: "medium",
  },
];

