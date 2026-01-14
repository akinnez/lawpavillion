import { useState } from "react";
import { Moon, Sun, User, Save } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";

export default function Settings() {
  const { profile, updateProfile } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [firstName, setFirstName] = useState(profile?.first_name || "");
  const [lastName, setLastName] = useState(profile?.last_name || "");
  const [middleName, setMiddleName] = useState(profile?.middle_name || "");

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      await updateProfile({
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
      });
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.log(error);

      setMessage("Error updating profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <User className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Profile Information
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Update your personal details
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <Label htmlFor="firstName">Full Name</Label>
            <Input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className=""
              placeholder="Enter your  first name"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className=""
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <Label htmlFor="middleName">Middle Name</Label>
            <Input
              id="firstName"
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              className=""
              placeholder="Enter your middle name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={profile?.email || ""}
              disabled
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 cursor-not-allowed"
            />
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Email cannot be changed
            </p>
          </div>

          {message && (
            <div
              className={`px-4 py-3 rounded-lg text-sm ${
                message.includes("success")
                  ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400"
                  : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
              }`}
            >
              {message}
            </div>
          )}

          <Button
            type="submit"
            disabled={saving}
            className="inline-flex w-fit! items-center gap-2"
          >
            <Save size={18} />
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
              {theme === "dark" ? (
                <Moon
                  className="text-orange-600 dark:text-orange-400"
                  size={20}
                />
              ) : (
                <Sun
                  className="text-orange-600 dark:text-orange-400"
                  size={20}
                />
              )}
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Appearance
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Customize how the app looks
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                Dark Mode
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Toggle between light and dark theme
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                theme === "dark" ? "bg-blue-600" : "bg-slate-300"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  theme === "dark" ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Preferences
        </h2>
        <div className="space-y-4">
          {[
            {
              label: "Email Notifications",
              description: "Receive email updates about your account",
            },
            {
              label: "Marketing Emails",
              description: "Receive emails about new features and updates",
            },
            {
              label: "Weekly Reports",
              description: "Get weekly summary of your activity",
            },
          ].map((pref, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-700 last:border-0"
            >
              <div>
                <h3 className="font-medium text-slate-900 dark:text-white">
                  {pref.label}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {pref.description}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked={index === 0}
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
