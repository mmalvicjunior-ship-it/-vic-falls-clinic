import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-dark to-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Quality <span className="text-emerald-400">Healthcare</span> in Victoria Falls
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Affordable, compassionate medical care for the whole family. Serving the Victoria Falls
              community with trusted, professional healthcare services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-appointment">
                <Button variant="primary" size="lg">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/treatments">
                <Button variant="outline" size="lg">
                  Explore Treatments
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 opacity-10 text-9xl">
          🏥
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-500">35+</div>
              <div className="text-gray-600 dark:text-gray-400">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-500">50K+</div>
              <div className="text-gray-600 dark:text-gray-400">Patients Treated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-500">98%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-500">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Expert Specialists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our <span className="text-emerald-500">Specialties</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🦻",
                title: "Ear Care",
                description: "Expert treatment for hearing loss, ear infections, and balance disorders.",
                href: "/treatments#ear-pain"
              },
              {
                icon: "👃",
                title: "Nose & Sinus",
                description: "Comprehensive care for sinusitis, allergies, and nasal obstructions.",
                href: "/treatments#sinus"
              },
              {
                icon: "🗣️",
                title: "Throat & Voice",
                description: "Professional treatment for throat infections, voice disorders, and more.",
                href: "/treatments#throat"
              }
            ].map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-xl transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <Link href={service.href} className="text-emerald-500 hover:text-emerald-600 font-medium">
                  Learn More →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            What Our <span className="text-emerald-500">Patients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                text: "The care I received was exceptional. Dr. Smith and his team made me feel comfortable throughout my treatment.",
                rating: 5
              },
              {
                name: "Michael Chen",
                text: "After years of sinus problems, I finally found relief. The staff is professional and caring.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                text: "Life-changing! My hearing is restored and the entire experience was seamless from start to finish.",
                rating: 5
              }
            ].map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <div className="text-yellow-400 text-lg mb-3">{"⭐".repeat(testimonial.rating)}</div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-gray-900 dark:text-white">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-500 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Schedule your appointment today and take the first step toward better ear, nose, and throat health.
          </p>
          <Link href="/book-appointment">
            <Button variant="secondary" size="lg">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
