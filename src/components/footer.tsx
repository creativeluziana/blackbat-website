import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-white px-10 pt-24 pb-10 overflow-hidden">
      {/* Background Mists - More Prominent */}
      <div className="absolute -bottom-32 -right-48 h-[700px] w-[700px] rounded-full bg-blue-300/30 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20">
                B
              </div>
              <span className="text-xl font-semibold text-slate-800">
                blackbox.ai
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Gain a competitive edge with AI-powered automation.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={16} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-800">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-slate-800 cursor-pointer">Features</li>
              <li className="hover:text-slate-800 cursor-pointer">Sign up</li>
              <li className="hover:text-slate-800 cursor-pointer">Career</li>
              <li className="hover:text-slate-800 cursor-pointer">Integration</li>
              <li className="hover:text-slate-800 cursor-pointer">Reviews</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-800">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-slate-800 cursor-pointer">About</li>
              <li className="hover:text-slate-800 cursor-pointer">Blog</li>
              <li className="hover:text-slate-800 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-slate-800 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-800">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-slate-800 cursor-pointer">Changelog</li>
              <li className="hover:text-slate-800 cursor-pointer">Style Guide</li>
              <li className="hover:text-slate-800 cursor-pointer">FAQs</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-slate-200 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-500">
          <span>© 2026 blackbox.ai. All Rights Reserved.</span>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-slate-800">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-slate-800">
              Terms of Services
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
