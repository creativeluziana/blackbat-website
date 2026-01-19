import hero from "../../assets/hero.png"

export default function HomeBenifits() {
  return (
    <section className="relative bg-white px-10 py-32 overflow-hidden">
      {/* Background Mists - More Prominent */}
      <div className="absolute top-1/2 -left-48 h-[800px] w-[800px] rounded-full bg-blue-300/30 blur-[140px]" />
      <div className="absolute top-0 -right-48 h-[700px] w-[700px] rounded-full bg-sky-200/35 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl space-y-32 z-10">

        {/* ================= BENEFITS ================= */}
        <div className="grid items-center gap-20 md:grid-cols-2">

          {/* TEXT */}
          <div>
            {/* Label – SAME TONE AS SECTION TWO */}
            <span className="inline-flex items-center rounded-xl border border-slate-300/70 bg-white/60 px-4 py-1.5 text-xs font-medium text-gray-500">
              Benefits
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-slate-600">
              Investment insights from
              <br />
              docs to dashboard
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500 font-medium">
              How blackbox.ai extracts investment document details and structures
              them into a dashboard.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-blue-600 text-xs text-white">
                  ✓
                </span>
                New data sources
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-blue-600 text-xs text-white">
                  ✓
                </span>
                Best parsing accuracy
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-blue-600 text-xs text-white">
                  ✓
                </span>
                Top countries with team support
              </li>
            </ul>

            <button className="mt-8 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-blue-700">
              Learn more
            </button>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <img
                src={hero}
                alt="Benefits preview"
                className="w-full object-cover"
              />
            </div>

            <div className="absolute -top-6 left-6 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs text-gray-500 shadow-sm">
              Growth overview
            </div>
          </div>
        </div>

        {/* ================= HOW IT WORKS ================= */}
        <div className="grid items-center gap-20 md:grid-cols-2">

          {/* IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <img
                src={hero}
                alt="How it works preview"
                className="w-full object-cover"
              />
            </div>

            <div className="absolute -top-6 right-6 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs text-gray-500 shadow-sm">
              $324,323
            </div>
          </div>

          {/* TEXT */}
          <div>
            <span className="inline-flex items-center rounded-xl border border-slate-300/70 bg-white/60 px-4 py-1.5 text-xs font-medium text-gray-500">
              How it works
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-slate-600">
              How it works: AI that
              <br />
              adapts to you
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              Experience AI that evolves with you. Our intelligent system adapts
              to your preferences, tone, and needs, making interactions more
              natural and personalized.
            </p>

            <button className="mt-8 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-blue-700">
              Learn more
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
