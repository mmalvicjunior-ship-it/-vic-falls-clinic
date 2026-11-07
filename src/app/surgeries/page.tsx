import { Card } from "@/components/ui/Card";

const surgeries = [
  { id: "tonsillectomy", title: "Tonsillectomy", icon: "👄", description: "Surgical removal of tonsils for chronic infections or breathing issues.", recovery: "1-2 weeks", duration: "30-45 min" },
  { id: "septoplasty", title: "Septoplasty", icon: "🔬", description: "Correction of deviated nasal septum for improved breathing.", recovery: "1-2 weeks", duration: "1-2 hours" },
  { id: "sinus", title: "Sinus Surgery", icon: "👃", description: "Minimally invasive surgery for chronic sinus conditions.", recovery: "1 week", duration: "1-3 hours" },
  { id: "tympanoplasty", title: "Tympanoplasty", icon: "👂", description: "Repair of eardrum perforations and middle ear reconstruction.", recovery: "2-4 weeks", duration: "1-3 hours" },
  { id: "myringotomy", title: "Myringotomy", icon: "🔵", description: "Surgical drainage of middle ear fluid with tube placement.", recovery: "1-2 days", duration: "15-30 min" },
  { id: "stapedectomy", title: "Stapedectomy", icon: "🔊", description: "Surgical treatment for otosclerosis to restore hearing.", recovery: "2-4 weeks", duration: "1-2 hours" },
  { id: "uppp", title: "Uvulopalatopharyngoplasty", icon: "😴", description: "Surgical treatment for snoring and sleep apnea.", recovery: "2-3 weeks", duration: "1-2 hours" },
  { id: "neck-dissection", title: "Neck Dissection", icon: "🏥", description: "Removal of lymph nodes in the neck for cancer treatment.", recovery: "4-6 weeks", duration: "2-5 hours" },
];

export default function SurgeriesPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-serif">Surgical Procedures</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Advanced surgical solutions for complex ENT conditions with a focus on safety and optimal outcomes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surgeries.map((surgery) => (
              <Card key={surgery.id} className="p-6 hover:shadow-xl transition" id={surgery.id}>
                <div className="text-4xl mb-3">{surgery.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {surgery.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {surgery.description}
                </p>
                <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">⏱ {surgery.duration}</span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">📅 {surgery.recovery}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Why Choose Our Surgical Team?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-500 text-xl">🏥</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">State-of-the-Art Facilities</h3>
                  <p className="text-gray-600 dark:text-gray-300">Our surgical center is equipped with the latest medical technology.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-500 text-xl">👨‍⚕️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Expert Surgeons</h3>
                  <p className="text-gray-600 dark:text-gray-300">Board-certified surgeons with extensive experience in all ENT procedures.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-500 text-xl">❤️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Comprehensive Care</h3>
                  <p className="text-gray-600 dark:text-gray-300">From pre-operative evaluation to post-surgical follow-up, we provide complete care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
