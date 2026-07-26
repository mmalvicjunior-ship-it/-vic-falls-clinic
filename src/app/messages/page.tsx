"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";

const initialMessages = [
  { id: 1, from: "Dr. James Smith", subject: "Post-Op Instructions", preview: "Please follow the care instructions after your procedure...", time: "2 hours ago", read: false },
  { id: 2, from: "Vic Falls Clinic Admin", subject: "Appointment Confirmation", preview: "Your appointment has been confirmed for Jan 20...", time: "1 day ago", read: false },
  { id: 3, from: "Dr. Emily Davis", subject: "Test Results Ready", preview: "Your audiometry results are now available...", time: "3 days ago", read: true },
  { id: 4, from: "Billing Department", subject: "Insurance Claim Update", preview: "Your recent insurance claim has been processed...", time: "1 week ago", read: true },
];

export default function MessagesPage() {
  const [messages] = useState(initialMessages);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Messages</h1>
        <div className="space-y-3">
          {messages.map((msg) => (
            <Card key={msg.id} className={`p-4 hover:shadow-xl transition cursor-pointer ${!msg.read ? "border-l-4 border-emerald-500" : ""}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {!msg.read && <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>}
                    <h3 className={`font-semibold text-gray-900 dark:text-white text-sm ${!msg.read ? "" : "font-normal"}`}>{msg.subject}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">From: {msg.from}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{msg.preview}</p>
                </div>
                <span className="text-gray-400 text-xs whitespace-nowrap ml-4">{msg.time}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
