import { Card } from "@/components/ui/Card";

const posts = [
  { img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=60", title: "Understanding Hearing Loss: Causes and Treatments", date: "Jan 15, 2024", category: "Ear Health", excerpt: "Hearing loss affects millions worldwide. Learn about the common causes and modern treatment options available." },
  { img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60", title: "5 Signs You Should See an ENT Specialist", date: "Jan 10, 2024", category: "General", excerpt: "Knowing when to consult an ENT specialist can make a significant difference in treatment outcomes." },
  { img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=60", title: "Sinusitis: When to Seek Medical Help", date: "Jan 5, 2024", category: "Sinus Health", excerpt: "Chronic sinusitis can significantly impact your quality of life. Here's when it's time to see a doctor." },
  { img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=60", title: "Children and Ear Infections: A Parent's Guide", date: "Dec 28, 2023", category: "Pediatric ENT", excerpt: "Ear infections are common in children. Learn the symptoms, treatments, and prevention strategies." },
  { img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=60", title: "Sleep Apnea: More Than Just Snoring", date: "Dec 20, 2023", category: "Sleep Health", excerpt: "Sleep apnea is a serious condition that can have lasting health impacts if left untreated." },
  { img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=60", title: "Allergy Season Survival Guide", date: "Dec 15, 2023", category: "Allergies", excerpt: "Tips and treatments to help you manage allergies effectively during peak season." },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="page-header">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-serif">Health Blog</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Latest health tips, medical insights, and wellness advice from our experts.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.title} className="group overflow-hidden hover:shadow-lift hover:-translate-y-1 transition cursor-pointer"><div className="card-img h-40 bg-teal-light"><img src={post.img} alt="" loading="lazy" /></div><div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <span className="text-emerald-500 hover:text-emerald-600 font-medium text-sm">Read More →</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
