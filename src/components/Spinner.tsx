export function Spinner() {
  return (
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4" />
      <p className="text-slate-600 dark:text-slate-400">Loading...</p>
    </div>
  );
}
