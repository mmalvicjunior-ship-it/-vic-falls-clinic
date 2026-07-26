import { Card } from "@/components/ui/Card";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">My Profile</h1>
        <Card className="p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">JD</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h2>
              <p className="text-gray-500 dark:text-gray-400">Patient ID: VFC-2024-001</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label className="text-sm text-gray-500">Email</label><p className="font-medium text-gray-900 dark:text-white">john.doe@email.com</p></div>
            <div><label className="text-sm text-gray-500">Phone</label><p className="font-medium text-gray-900 dark:text-white">+1 (234) 567-890</p></div>
            <div><label className="text-sm text-gray-500">Date of Birth</label><p className="font-medium text-gray-900 dark:text-white">Jan 15, 1985</p></div>
            <div><label className="text-sm text-gray-500">Insurance</label><p className="font-medium text-gray-900 dark:text-white">Health Plus Premium</p></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
