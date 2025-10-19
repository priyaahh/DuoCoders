import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card(props: DivProps) {
  const { className = "", ...rest } = props;
  return <div className={`rounded-xl border bg-card text-card-foreground shadow-soft ${className}`} {...rest} />;
}

export function CardHeader(props: DivProps) {
  const { className = "", ...rest } = props;
  return <div className={`p-4 ${className}`} {...rest} />;
}

export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const { className = "", ...rest } = props;
  return <h3 className={`font-semibold leading-none tracking-tight ${className}`} {...rest} />;
}

export function CardDescription(props: React.HTMLAttributes<HTMLParagraphElement>) {
  const { className = "", ...rest } = props;
  return <p className={`text-sm text-muted-foreground ${className}`} {...rest} />;
}

export function CardContent(props: DivProps) {
  const { className = "", ...rest } = props;
  return <div className={`p-4 pt-0 ${className}`} {...rest} />;
}

