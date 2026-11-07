import { Card } from "@/components/ui/Card";

const doctors = [
  { name: "Dr. James Smith", specialty: "Chief of ENT Surgery", experience: "20+ years", bio: "Board-certified ENT surgeon specializing in complex head and neck procedures." },
  { name: "Dr. Sarah Johnson", specialty: "Pediatric ENT", experience: "15+ years", bio: "Expert in treating ENT conditions in children of all ages." },
  { name: "Dr. Michael Chen", specialty: "Head & Neck Surgery", experience: "18+ years", bio: "Specialized in complex head and neck surgical procedures." },
  { name: "Dr. Emily Davis", specialty: "Audiology", experience: "12+ years", bio: "Expert in hearing assessment and rehabilitation." },
  { name: "Dr. Robert Wilson", specialty: "Sinus & Allergy", experience: "14+ years", bio: "Pioneer in balloon sinuplasty and minimally invasive sinus surgery." },
  { name: "Dr. Lisa Anderson", specialty: "Voice Disorders", experience: "10+ years", bio: "Specialist in voice disorders, swallowing difficulties, and laryngology." },
];

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-serif">Our Doctors</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Meet our team of expert ENT specialists dedicated to your health.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.name} className="p-6 hover:shadow-xl transition">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">👨‍⚕️</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{doctor.name}</h2>
                <p className="text-emerald-500 font-medium text-sm mb-1">{doctor.specialty}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{doctor.experience}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{doctor.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
