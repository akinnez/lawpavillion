import { Outlet } from "react-router-dom";

export default function AuthLayout(): React.ReactElement {
  return (
    <div className="min-h-screen py-5 flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
