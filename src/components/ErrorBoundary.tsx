import { Component, type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import Button from "./Button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
              <AlertTriangle
                className="text-red-600 dark:text-red-400"
                size={32}
              />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Something went wrong
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We're sorry, but something unexpected happened. Please try
              refreshing the page.
            </p>
            {this.state.error && (
              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm text-slate-700 dark:text-slate-300 font-mono break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}
            <Button onClick={() => (window.location.href = "/")}>
              Go to Dashboard
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
