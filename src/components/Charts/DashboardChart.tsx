import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartData } from "../../types/dashboard";

export const DashboardChart = ({ chartData }: { chartData: ChartData[] }) => (
  <ResponsiveContainer width="100%" height={320}>
    <LineChart data={chartData}>
      <CartesianGrid
        strokeDasharray="3 3"
        stroke="#e2e8f0"
        className="dark:stroke-slate-700"
      />
      <XAxis
        dataKey="name"
        stroke="#64748b"
        className="dark:stroke-slate-400"
      />
      <YAxis stroke="#64748b" className="dark:stroke-slate-400" />
      <Tooltip
        contentStyle={{
          backgroundColor: "white",
          border: "1px solid #e2e8f0",
          borderRadius: "0.5rem",
        }}
        labelStyle={{ color: "#0f172a" }}
      />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#3b82f6"
        strokeWidth={2}
        dot={{ fill: "#3b82f6", r: 4 }}
        activeDot={{ r: 6 }}
      />
    </LineChart>
  </ResponsiveContainer>
);
