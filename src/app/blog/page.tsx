import { Card } from "@/components/ui/Card";

const posts = [
  { title: "Understanding Hearing Loss: Causes and Treatments", date: "Jan 15, 2024", category: "Ear Health", excerpt: "Hearing loss affects millions worldwide. Learn about the common causes and modern treatment options available." },
  { title: "5 Signs You Should See an ENT Specialist", date: "Jan 10, 2024", category: "General", excerpt: "Knowing when to consult an ENT specialist can make a significant difference in treatment outcomes." },
  { title: "Sinusitis: When to Seek Medical Help", date: "Jan 5, 2024", category: "Sinus Health", excerpt: "Chronic sinusitis can significantly impact your quality of life. Here's when it's time to see a doctor." },
  { title: "Children and Ear Infections: A Parent's Guide", date: "Dec 28, 2023", category: "Pediatric ENT", excerpt: "Ear infections are common in children. Learn the symptoms, treatments, and prevention strategies." },
  { title: "Sleep Apnea: More Than Just Snoring", date: "Dec 20, 2023", category: "Sleep Health", excerpt: "Sleep apnea is a serious condition that can have lasting health impacts if left untreated." },
  { title: "Allergy Season Survival Guide", date: "Dec 15, 2023", category: "Allergies", excerpt: "Tips and treatments to help you manage allergies effectively during peak season." },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="bg-navy-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Health Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Latest health tips, medical insights, and wellness advice from our experts.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.title} className="p-6 hover:shadow-xl transition cursor-pointer">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-600 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <span className="text-emerald-500 hover:text-emerald-600 font-medium text-sm">Read More →</span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
