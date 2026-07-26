"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    darkMode: false,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notification Preferences</h2>
            <div className="space-y-4">
              {[
                { key: "emailNotifications" as const, label: "Email Notifications" },
                { key: "smsNotifications" as const, label: "SMS Notifications" },
                { key: "appointmentReminders" as const, label: "Appointment Reminders" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                  <button onClick={() => toggle(item.key)}
                    className={`w-12 h-6 rounded-full transition-colors ${settings[item.key] ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"}`}>
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings[item.key] ? "translate-x-6" : "translate-x-0.5"}`} />
                  </button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account</h2>
            <div className="space-y-3">
              <Button variant="outline" size="sm">Change Password</Button>
              <Button variant="outline" size="sm">Update Email</Button>
              <button className="text-red-500 hover:text-red-600 text-sm font-medium block mt-4">Delete Account</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
