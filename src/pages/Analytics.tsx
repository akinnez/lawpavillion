import { categoryData, kpis, topPerformer } from "../lib/analytics-mock-data";
import { AnalyticsPieChart } from "../components/Charts/AnayticsPieChart";
import { AnalyticsBarChart } from "../components/Charts/AnalyticsBarChart";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Analytics
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Detailed insights into your business performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${kpi.bgColor} ${kpi.color}`}>
                <kpi.icon size={24} />
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {kpi.change}
              </span>
            </div>
            <h3 className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">
              {kpi.label}
            </h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Monthly Performance
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Users and revenue over the last 6 months
            </p>
          </div>
          <AnalyticsBarChart />
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Product Distribution
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Sales breakdown by product category
            </p>
          </div>

          <div className="flex items-center justify-center">
            <AnalyticsPieChart />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {categoryData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Top Performing Regions
        </h2>
        <div className="space-y-4">
          {topPerformer.map((region) => (
            <div key={region.region}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {region.region}
                </span>
                <span className="text-slate-900 dark:text-white font-semibold">
                  {region.revenue}
                </span>
              </div>
              <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-blue-500 to-blue-600 rounded-full"
                  style={{ width: `${region.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
