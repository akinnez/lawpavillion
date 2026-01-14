import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { categoryData } from "../../lib/analytics-mock-data";

export const AnalyticsPieChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={categoryData}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
        paddingAngle={5}
        dataKey="value"
      >
        {categoryData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);
