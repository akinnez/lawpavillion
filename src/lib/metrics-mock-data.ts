import { Activity, DollarSign, TrendingUp, Users } from "lucide-react";
import type { Metric } from "../types/dashboard";

export const metrics: Metric[] = [
    {
      label: "Total Users",
      value: "12,543",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      label: "Revenue",
      value: "$48,352",
      change: "+8.2%",
      icon: DollarSign,
      color: "text-green-600 dark:text-green-400",
    },
    {
      label: "Growth Rate",
      value: "23.4%",
      change: "+4.1%",
      icon: TrendingUp,
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      label: "Active Now",
      value: "847",
      change: "+2.3%",
      icon: Activity,
      color: "text-purple-600 dark:text-purple-400",
    },
  ];
