import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative w-screen overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-white">

      {/* MAIN CONTENT */}
      <div className="relative mx-auto max-w-7xl px-10 pt-24 pb-32 z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">

          {/* BRAND + DESCRIPTION */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-lg">
                B
              </div>
              <div>
                <p className="text-xl font-semibold text-slate-800">
                  blackbat.ai
                </p>
                <p className="text-xs tracking-wider text-blue-600">
                  TECHNOLOGIES
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
              Empowering businesses across 10+ industries with AI-driven ERP
              solutions. We transform complex operations into streamlined,
              intelligent workflows that drive growth and efficiency.
            </p>

            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <div
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full
                             border border-slate-200 bg-white text-slate-500
                             hover:bg-blue-600 hover:text-white transition"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-slate-800">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Solutions</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Our Clients</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* OUR SOLUTIONS */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-slate-800">
              Our Solutions
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>School ERP</li>
              <li>Healthcare ERP</li>
              <li>Real Estate ERP</li>
              <li>Retail & POS</li>
              <li>Manufacturing ERP</li>
              <li>HRMS & Payroll</li>
              <li>Supply Chain</li>
              <li>E-commerce ERP</li>
            </ul>
          </div>

          {/* SUPPORT + NEWSLETTER */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-slate-800">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>Help Center</li>
              <li>Documentation</li>
              <li>API Reference</li>
              <li>System Status</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>

            {/* NEWSLETTER */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-slate-800">
                Newsletter
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-blue-500"
                />
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-slate-200 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-500">
          <span>
            © 2025 BlackBatAI Technologies Pvt. Ltd. All rights reserved.
          </span>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>

      {/* WATERMARK — DO NOT TOUCH */}
      <div className="absolute bottom-0 left-0 w-screen pointer-events-none">
        <div className="text-center">
          <span
            className="
              block select-none font-extrabold
              text-slate-300/30
              text-[22vw] leading-none
              translate-y-1/3
            "
          >
            BlackBat
          </span>
        </div>
      </div>
    </footer>
  )
}
