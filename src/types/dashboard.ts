import type { Users } from "lucide-react";

export interface ChartData {
  name: string;
  value: number;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
  icon: typeof Users;
  color: string;
}
