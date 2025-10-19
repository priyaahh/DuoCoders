import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "warning";
  icon: (props: { className?: string }) => any;
};

export function MetricCard({ title, value, change, changeType, icon: IconComp }: MetricCardProps) {
  const changeColor =
    changeType === "positive"
      ? "text-success"
      : changeType === "negative"
      ? "text-destructive"
      : "text-warning";

  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <IconComp className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <p className={`text-sm ${changeColor}`}>{change}</p>
      </CardContent>
    </Card>
  );
}
