import { type ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/analytics", icon: BarChart3, label: "Analytics" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export function AppLayout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { signOut, profile } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center px-4 z-40">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="ml-4 font-semibold text-slate-900 dark:text-white">
          SaaS Dashboard
        </span>
      </div>

      <aside
        className={`fixed top-0 left-0 h-screen bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transition-all duration-300 z-50 ${
          sidebarOpen ? "w-64" : "w-0 lg:w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          <div
            className={`h-16 flex items-center justify-between px-4 border-b border-slate-200 dark:border-slate-700 ${
              sidebarOpen ? "" : "lg:justify-center"
            }`}
          >
            {sidebarOpen && (
              <span className="font-semibold text-slate-900 dark:text-white">
                SaaS Dashboard
              </span>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:block p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() =>
                  window.innerWidth < 1024 && setSidebarOpen(false)
                }
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                  } ${sidebarOpen ? "" : "lg:justify-center"}`
                }
              >
                <item.icon size={20} />
                {sidebarOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div
              className={`flex items-center gap-3 mb-3 ${
                sidebarOpen ? "" : "lg:justify-center"
              }`}
            >
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                    {profile?.first_name || "User"}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {profile?.email}
                  </p>
                </div>
              )}
              {!sidebarOpen && (
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                  {profile?.first_name?.[0]?.toUpperCase() || "U"}
                </div>
              )}
            </div>
            <button
              onClick={handleSignOut}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 w-full ${
                sidebarOpen ? "" : "lg:justify-center"
              }`}
            >
              <LogOut size={20} />
              {sidebarOpen && <span className="font-medium">Sign Out</span>}
            </button>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main
        className={`transition-all duration-300 pt-16 lg:pt-0 ${
          sidebarOpen ? "lg:ml-64" : "lg:ml-20"
        }`}
      >
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
