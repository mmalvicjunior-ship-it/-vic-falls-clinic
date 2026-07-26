import Link from "next/link";
import { Card } from "@/components/ui/Card";

const treatments = [
  {
    id: "ear-pain",
    title: "Ear Pain Treatment",
    icon: "🦻",
    description: "Comprehensive diagnosis and treatment for acute and chronic ear pain, infections, and related conditions.",
    symptoms: ["Sharp or dull pain", "Hearing loss", "Dizziness", "Fever"],
    treatments: ["Medication", "Ear drops", "Minor procedures", "Surgery if needed"]
  },
  {
    id: "hearing-loss",
    title: "Hearing Loss",
    icon: "🔊",
    description: "Advanced diagnostics and treatment options for all types of hearing loss, from mild to profound.",
    symptoms: ["Difficulty understanding speech", "Turning up volume", "Ringing in ears", "Social withdrawal"],
    treatments: ["Hearing aids", "Cochlear implants", "Medication", "Surgery"]
  },
  {
    id: "vertigo",
    title: "Vertigo Treatment",
    icon: "🌀",
    description: "Expert care for balance disorders, dizziness, and vertigo with advanced diagnostic tools.",
    symptoms: ["Spinning sensation", "Nausea", "Balance problems", "Headaches"],
    treatments: ["Epley maneuver", "Medication", "Vestibular rehabilitation", "Surgery"]
  },
  {
    id: "tonsils",
    title: "Tonsil Removal",
    icon: "👄",
    description: "Safe and effective tonsillectomy for recurrent tonsillitis, breathing problems, and sleep apnea.",
    symptoms: ["Sore throat", "Difficulty swallowing", "Snoring", "Swollen tonsils"],
    treatments: ["Tonsillectomy", "Laser tonsillectomy", "Cold knife tonsillectomy"]
  },
  {
    id: "allergy",
    title: "Allergy & Rhinitis",
    icon: "🤧",
    description: "Comprehensive allergy testing and treatment for allergic rhinitis, hay fever, and related conditions.",
    symptoms: ["Sneezing", "Runny nose", "Itchy eyes", "Congestion"],
    treatments: ["Allergy testing", "Immunotherapy", "Medication", "Avoidance strategies"]
  },
  {
    id: "sinus",
    title: "Sinus & Polyps",
    icon: "👃",
    description: "Specialized care for chronic sinusitis, nasal polyps, and sinus-related breathing issues.",
    symptoms: ["Facial pain", "Nasal congestion", "Loss of smell", "Headaches"],
    treatments: ["Balloon sinuplasty", "Medication", "Sinus surgery", "Polyp removal"]
  },
  {
    id: "snoring",
    title: "Snoring & Sleep Apnea",
    icon: "😴",
    description: "Advanced diagnostics and treatment for snoring and sleep-disordered breathing.",
    symptoms: ["Loud snoring", "Daytime fatigue", "Gasping during sleep", "Morning headaches"],
    treatments: ["CPAP therapy", "Oral appliances", "Lifestyle changes", "Surgery"]
  },
  {
    id: "facial-nerve",
    title: "Facial Nerve Disorders",
    icon: "😊",
    description: "Comprehensive care for Bell's palsy, facial nerve paralysis, and related conditions.",
    symptoms: ["Facial weakness", "Drooping", "Loss of facial expression", "Pain"],
    treatments: ["Medication", "Physical therapy", "Surgical decompression", "Reanimation surgery"]
  },
  {
    id: "ear-drum",
    title: "Ear Drum Repair",
    icon: "👂",
    description: "Expert tympanoplasty and myringoplasty for perforated eardrums and hearing improvement.",
    symptoms: ["Hearing loss", "Ear discharge", "Pain", "Tinnitus"],
    treatments: ["Tympanoplasty", "Myringoplasty", "Patch grafts", "Surgical reconstruction"]
  }
];

export default function TreatmentsPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="bg-navy-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Treatments</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive ENT treatments using the latest medical advancements and evidence-based approaches.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment) => (
              <Card key={treatment.id} className="p-6 hover:shadow-xl transition" id={treatment.id}>
                <div className="text-4xl mb-3">{treatment.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {treatment.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {treatment.description}
                </p>

                <details className="text-sm">
                  <summary className="text-emerald-500 font-medium cursor-pointer hover:text-emerald-600">
                    View Details
                  </summary>
                  <div className="mt-3 space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">Symptoms:</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        {treatment.symptoms.map((symptom) => (
                          <li key={symptom}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">Treatments:</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        {treatment.treatments.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
