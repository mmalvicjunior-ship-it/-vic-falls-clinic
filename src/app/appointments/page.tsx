import { Card } from "@/components/ui/Card";

const appointments = [
  { id: 1, doctor: "Dr. James Smith", type: "Follow-up", date: "Jan 20, 2024", time: "10:00 AM", status: "Upcoming" },
  { id: 2, doctor: "Dr. Emily Davis", type: "Hearing Test", date: "Feb 5, 2024", time: "2:30 PM", status: "Upcoming" },
  { id: 3, doctor: "Dr. Sarah Johnson", type: "Consultation", date: "Dec 15, 2023", time: "11:00 AM", status: "Completed" },
  { id: 4, doctor: "Dr. Michael Chen", type: "Pre-op Assessment", date: "Nov 28, 2023", time: "9:00 AM", status: "Completed" },
];

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">My Appointments</h1>
        <div className="space-y-4">
          {appointments.map((apt) => (
            <Card key={apt.id} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{apt.type}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{apt.doctor}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">📅 {apt.date} at {apt.time}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  apt.status === "Upcoming" ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                }`}>
                  {apt.status}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
