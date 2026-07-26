import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Vic Falls Clinic</h3>
            <p className="text-gray-300 text-sm">
              Providing quality, affordable healthcare to the Victoria Falls community and beyond. Trusted medical care for the whole family.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition text-xl">📱</a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition text-xl">🐦</a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition text-xl">📘</a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition text-xl">📺</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/treatments" className="hover:text-emerald-400 transition">Treatments</Link></li>
              <li><Link href="/surgeries" className="hover:text-emerald-400 transition">Surgeries</Link></li>
              <li><Link href="/doctors" className="hover:text-emerald-400 transition">Find a Doctor</Link></li>
              <li><Link href="/book-appointment" className="hover:text-emerald-400 transition">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">📍 123 Livingstone Way, Victoria Falls, Zimbabwe</li>
              <li className="flex items-center gap-2">📞 +263 (0) 83 284 4556</li>
              <li className="flex items-center gap-2">✉️ info@vicfallsclinic.co.zw</li>
              <li className="flex items-center gap-2">🕐 Mon-Fri: 8AM - 5PM, Sat: 8AM - 12PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe for health tips and updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 text-sm"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-r-lg transition text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 flex flex-wrap justify-between">
          <span>© {new Date().getFullYear()} Vic Falls Clinic. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-emerald-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-400 transition">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-emerald-400 transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
