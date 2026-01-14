import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { monthlyData } from "../../lib/analytics-mock-data";

export const AnalyticsBarChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={monthlyData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
      <XAxis dataKey="month" stroke="#64748b" />
      <YAxis stroke="#64748b" />
      <Tooltip
        contentStyle={{
          backgroundColor: "white",
          border: "1px solid #e2e8f0",
          borderRadius: "0.5rem",
        }}
      />
      <Bar dataKey="users" fill="#3b82f6" radius={[8, 8, 0, 0]} />
      <Bar dataKey="revenue" fill="#10b981" radius={[8, 8, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);
