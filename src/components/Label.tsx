export default function Label({
  children,
  htmlFor,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
    >
      {children}
    </label>
  );
}
