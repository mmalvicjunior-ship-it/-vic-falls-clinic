import { Card } from "@/components/ui/Card";

const records = [
  { id: 1, title: "Audiometry Report", date: "Dec 10, 2023", type: "Test Result", doctor: "Dr. Emily Davis" },
  { id: 2, title: "Sinus CT Scan", date: "Nov 22, 2023", type: "Imaging", doctor: "Dr. Robert Wilson" },
  { id: 3, title: "ENT Examination Notes", date: "Nov 15, 2023", type: "Visit Summary", doctor: "Dr. James Smith" },
  { id: 4, title: "Blood Work Results", date: "Nov 10, 2023", type: "Lab Results", doctor: "Dr. James Smith" },
  { id: 5, title: "Prescription - Amoxicillin", date: "Oct 28, 2023", type: "Prescription", doctor: "Dr. Sarah Johnson" },
];

export default function RecordsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Medical Records</h1>
        <div className="space-y-4">
          {records.map((record) => (
            <Card key={record.id} className="p-6 hover:shadow-xl transition cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{record.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{record.doctor}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">📅 {record.date}</p>
                </div>
                <div className="text-right">
                  <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium">
                    {record.type}
                  </span>
                  <button className="block mt-2 text-emerald-500 hover:text-emerald-600 text-sm font-medium">Download</button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
