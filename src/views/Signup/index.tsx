import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signUp(email, password, first_name, last_name, middle_name);
      navigate("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Create Account
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Sign up to get started
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="middleName">
              Middle Name{" "}
              <span className="italics text-[10px] text-gray-600">
                (Optional)
              </span>
            </Label>
            <Input
              id="middleName"
              value={middle_name}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Sign Up"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <a
          href="/login"
          onClick={() => {
            setError("");
          }}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          Already have an account? Sign in
        </a>
      </div>
    </>
  );
}
