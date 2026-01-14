import { Spinner } from "./Spinner";

export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
      <Spinner />
    </div>
  );
}
