import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

export const monthlyData = [
  { month: "Jan", users: 4000, revenue: 2400 },
  { month: "Feb", users: 3000, revenue: 1398 },
  { month: "Mar", users: 2000, revenue: 9800 },
  { month: "Apr", users: 2780, revenue: 3908 },
  { month: "May", users: 1890, revenue: 4800 },
  { month: "Jun", users: 2390, revenue: 3800 },
];

export const categoryData = [
  { name: "Product A", value: 400, color: "#3b82f6" },
  { name: "Product B", value: 300, color: "#10b981" },
  { name: "Product C", value: 200, color: "#f59e0b" },
  { name: "Product D", value: 100, color: "#ef4444" },
];

export const topPerformer = [
  { region: "North America", revenue: "$45,230", percentage: 85 },
  { region: "Europe", revenue: "$32,450", percentage: 68 },
  { region: "Asia Pacific", revenue: "$28,120", percentage: 58 },
  { region: "Latin America", revenue: "$18,792", percentage: 42 },
];

export const kpis = [
  {
    label: "Total Revenue",
    value: "$124,592",
    change: "+18.2%",
    icon: DollarSign,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/20",
  },
  {
    label: "New Customers",
    value: "2,543",
    change: "+12.5%",
    icon: Users,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    label: "Orders",
    value: "8,234",
    change: "+9.3%",
    icon: ShoppingCart,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
  },
  {
    label: "Growth",
    value: "45.2%",
    change: "+5.1%",
    icon: TrendingUp,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
  },
];
