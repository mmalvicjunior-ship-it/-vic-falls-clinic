import { Card } from "@/components/ui/Card";

const insuranceProviders = [
  { name: "Health Plus Premium", coverage: "Full Coverage", id: "HP-2024-8842" },
  { name: "MediCare Pro", coverage: "80% Coverage", id: "MC-2024-1234" },
  { name: "Blue Shield", coverage: "70% Coverage", id: "BS-2024-5678" },
];

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Insurance Information</h1>
        <Card className="p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Accepted Insurance Providers</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We accept most major insurance plans. Please contact our billing department if you have questions about coverage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insuranceProviders.map((provider) => (
              <div key={provider.name} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">{provider.name}</h3>
                <p className="text-emerald-500 text-sm">{provider.coverage}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Questions About Coverage?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our billing team is here to help you understand your benefits and maximize your coverage.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            📞 Call: +263 (0) 83 284 4556<br />
            ✉️ Email: billing@vicfallsclinic.co.zw
          </p>
        </Card>
      </div>
    </div>
  );
}
