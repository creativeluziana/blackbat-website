import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative w-screen overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-white">

      {/* FOOTER CONTENT (CONSTRAINED) */}
      <div className="relative mx-auto max-w-7xl px-10 pt-24 pb-32 z-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-lg">
                B
              </div>
              <span className="text-xl font-semibold text-slate-800">
                blackbat.ai
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Gain a competitive edge with AI-powered automation.
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

          {/* PRODUCTS */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-800">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>Features</li>
              <li>Sign up</li>
              <li>Career</li>
              <li>Integration</li>
              <li>Reviews</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-800">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>About</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-800">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>Changelog</li>
              <li>Style Guide</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-slate-200 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-500">
          <span>© 2026 BlackBox. All Rights Reserved.</span>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Services</span>
          </div>
        </div>
      </div>

      {/* WATERMARK TEXT — FULL WIDTH, SAME STYLE */}
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
