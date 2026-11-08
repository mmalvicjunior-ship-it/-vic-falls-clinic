import Link from "next/link";
import { Card } from "@/components/ui/Card";

const treatments = [
  {
    id: "ear-pain", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60",
    title: "Ear Pain Treatment",
    icon: "🦻",
    description: "Comprehensive diagnosis and treatment for acute and chronic ear pain, infections, and related conditions.",
    symptoms: ["Sharp or dull pain", "Hearing loss", "Dizziness", "Fever"],
    treatments: ["Medication", "Ear drops", "Minor procedures", "Surgery if needed"]
  },
  {
    id: "hearing-loss", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=60",
    title: "Hearing Loss",
    icon: "🔊",
    description: "Advanced diagnostics and treatment options for all types of hearing loss, from mild to profound.",
    symptoms: ["Difficulty understanding speech", "Turning up volume", "Ringing in ears", "Social withdrawal"],
    treatments: ["Hearing aids", "Cochlear implants", "Medication", "Surgery"]
  },
  {
    id: "vertigo", img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=60",
    title: "Vertigo Treatment",
    icon: "🌀",
    description: "Expert care for balance disorders, dizziness, and vertigo with advanced diagnostic tools.",
    symptoms: ["Spinning sensation", "Nausea", "Balance problems", "Headaches"],
    treatments: ["Epley maneuver", "Medication", "Vestibular rehabilitation", "Surgery"]
  },
  {
    id: "tonsils", img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=60",
    title: "Tonsil Removal",
    icon: "👄",
    description: "Safe and effective tonsillectomy for recurrent tonsillitis, breathing problems, and sleep apnea.",
    symptoms: ["Sore throat", "Difficulty swallowing", "Snoring", "Swollen tonsils"],
    treatments: ["Tonsillectomy", "Laser tonsillectomy", "Cold knife tonsillectomy"]
  },
  {
    id: "allergy", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=60",
    title: "Allergy & Rhinitis",
    icon: "🤧",
    description: "Comprehensive allergy testing and treatment for allergic rhinitis, hay fever, and related conditions.",
    symptoms: ["Sneezing", "Runny nose", "Itchy eyes", "Congestion"],
    treatments: ["Allergy testing", "Immunotherapy", "Medication", "Avoidance strategies"]
  },
  {
    id: "sinus", img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=60",
    title: "Sinus & Polyps",
    icon: "👃",
    description: "Specialized care for chronic sinusitis, nasal polyps, and sinus-related breathing issues.",
    symptoms: ["Facial pain", "Nasal congestion", "Loss of smell", "Headaches"],
    treatments: ["Balloon sinuplasty", "Medication", "Sinus surgery", "Polyp removal"]
  },
  {
    id: "snoring", img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=60",
    title: "Snoring & Sleep Apnea",
    icon: "😴",
    description: "Advanced diagnostics and treatment for snoring and sleep-disordered breathing.",
    symptoms: ["Loud snoring", "Daytime fatigue", "Gasping during sleep", "Morning headaches"],
    treatments: ["CPAP therapy", "Oral appliances", "Lifestyle changes", "Surgery"]
  },
  {
    id: "facial-nerve", img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=60",
    title: "Facial Nerve Disorders",
    icon: "😊",
    description: "Comprehensive care for Bell's palsy, facial nerve paralysis, and related conditions.",
    symptoms: ["Facial weakness", "Drooping", "Loss of facial expression", "Pain"],
    treatments: ["Medication", "Physical therapy", "Surgical decompression", "Reanimation surgery"]
  },
  {
    id: "ear-drum", img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=60",
    title: "Ear Drum Repair",
    icon: "👂",
    description: "Expert tympanoplasty and myringoplasty for perforated eardrums and hearing improvement.",
    symptoms: ["Hearing loss", "Ear discharge", "Pain", "Tinnitus"],
    treatments: ["Tympanoplasty", "Myringoplasty", "Patch grafts", "Surgical reconstruction"]
  },
  { id:"throat", img:"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=60", title:"Throat Infections", icon:"🗣️", description:"Professional treatment for throat infections, voice disorders, and related conditions.", symptoms:["Sore throat","Difficulty swallowing","Hoarse voice","Swollen glands"], treatments:["Medication","Voice therapy","Minor procedures","Surgery if needed"]},
  { id:"tumors", img:"https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=60", title:"Head & Neck Tumors", icon:"🎗️", description:"Assessment and care pathways for head and neck tumors and related conditions.", symptoms:["Lump in neck","Persistent hoarseness","Difficulty swallowing","Unexplained weight loss"], treatments:["Biopsy","Imaging","Surgical treatment","Referral pathways"]}
];

export default function TreatmentsPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-serif">Our Treatments</h1>
          <p className="font-serif text-lg">
            Comprehensive ENT treatments using the latest medical advancements and evidence-based approaches.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment) => (
              <Card key={treatment.id} className="group overflow-hidden hover:shadow-lift hover:-translate-y-1 transition" id={treatment.id}>
                <div className="card-img h-40 bg-teal-light"><img src={treatment.img} alt="" loading="lazy" /></div>
                <div className="p-6"><div className="text-4xl mb-3">{treatment.icon}</div>
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
