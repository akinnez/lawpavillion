import { useEffect, useState, lazy } from "react";
import { useAuth } from "../hooks/useAuth";
import type { ChartData } from "../types/dashboard";
import { metrics } from "../lib/metrics-mock-data";
import {
  activityStat,
  fallbackData,
  quickStatData,
} from "../lib/dashboard-mock-data";

const Spinner = lazy(() =>
  import("../components/Spinner").then((module) => ({
    default: module.Spinner,
  }))
);

const DashboardChart = lazy(() =>
  import("../components/Charts/DashboardChart").then((module) => ({
    default: module.DashboardChart,
  }))
);

export default function Dashboard() {
  const { profile } = useAuth();
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/historical/close.json?currency=USD&start=2026-01-01&end=2026-01-07"
        );
        const data = await response.json();

        const formattedData = Object.entries(data.bpi).map(([date, value]) => ({
          name: new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          value: value as number,
        }));

        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);

        setChartData(fallbackData);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Welcome back, {profile?.first_name || "User"}!
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Here&#39;s what&#39;s happening with your business today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-lg bg-slate-100 dark:bg-slate-700 ${metric.color}`}
              >
                <metric.icon size={24} />
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {metric.change}
              </span>
            </div>
            <h3 className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">
              {metric.label}
            </h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Revenue Trend
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Bitcoin prices from CoinDesk API
          </p>
        </div>

        {loading ? (
          <div className="h-80 flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <DashboardChart chartData={chartData} />
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {activityStat.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700 last:border-0"
              >
                <span className="text-slate-700 dark:text-slate-300">
                  {activity.action}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Quick Stats
          </h3>
          <div className="space-y-4">
            {quickStatData.map((stat, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </span>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                </div>
                <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                    style={{ width: `${stat.bar}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
