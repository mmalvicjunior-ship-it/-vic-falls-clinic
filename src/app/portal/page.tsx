import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Patient Portal</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: "📅", title: "Appointments", desc: "View and manage your upcoming appointments", href: "/appointments" },
            { icon: "📋", title: "Medical Records", desc: "Access your medical history and reports", href: "/records" },
            { icon: "💬", title: "Messages", desc: "Communicate with your healthcare team", href: "/messages" },
            { icon: "💊", title: "Prescriptions", desc: "View and refill your medications", href: "/records" },
            { icon: "💳", title: "Billing", desc: "View invoices and make payments", href: "/portal" },
            { icon: "⚙️", title: "Settings", desc: "Manage your account preferences", href: "/settings" },
          ].map((item) => (
            <Link key={item.title} href={item.href}><Card className="p-6 hover:shadow-lift transition cursor-pointer h-full">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
            </Card></Link>
          ))}
        </div>
      </div>
    </div>
  );
}
