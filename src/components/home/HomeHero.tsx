import hero from "../../assets/hero.png"
import Companies from "./Companies"

export default function HomeHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf2ff] via-[#f5f8ff] to-white pt-24 md:pt-32 pb-20">

        {/* DOT GRID */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.08)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-60" />

        {/* BACKGROUND MISTS */}
        <div className="absolute top-20 -left-32 h-[600px] w-[600px] rounded-full bg-blue-400/30 blur-[120px]" />
        <div className="absolute bottom-20 -right-32 h-[700px] w-[700px] rounded-full bg-blue-300/25 blur-[140px]" />

        {/* CONTENT */}
        <div className="relative mx-auto max-w-7xl px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 md:gap-16">

            {/* RIGHT IMAGE — FIRST ON MOBILE */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">

              {/* FLOATING NOTIFICATION CARD */}
              <div className="
                absolute
                -bottom-8
                -left-6
                z-20
                flex items-center gap-4
                rounded-2xl
                bg-white
                px-5 py-4
                shadow-2xl
                border border-slate-200
              ">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    New Order Received
                  </p>
                  <p className="text-sm text-blue-600">
                    ₹45,000 from Retail Store
                  </p>
                </div>
              </div>

              {/* IMAGE CARD */}
              <div className="
                relative
                rounded-2xl
                bg-white
                p-2
                shadow-xl
                border border-slate-200
              ">
                <img
                  src={hero}
                  alt="Dashboard preview"
                  className="w-full max-w-[650px] rounded-xl"
                />
              </div>
            </div>

            {/* LEFT CONTENT — SECOND ON MOBILE */}
            <div className="order-2 lg:order-1 text-left">

              {/* TRUSTED BY — MATCHING PILL */}
              <span className="
                inline-flex
                items-center
                rounded-full
                border border-slate-300/60
                bg-transparent
                px-4 py-1.5
                text-xs
                font-medium
                text-slate-600
              ">
                Trusted by 500+ Businesses
              </span>

              {/* HEADING */}
              <h1 className="
                mt-6
                text-4xl md:text-5xl
                font-semibold
                tracking-tight
                leading-[1.15]
                text-slate-600
              ">
                <span className="block">One Platform.</span>
                <span className="block mt-1 text-blue-600">Infinite</span>
                <span className="block mt-1">Possibilities.</span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500 font-medium">
                India’s most comprehensive AI-powered ERP ecosystem.
                10+ industry-specific solutions designed to transform your
                business operations from day one.
              </p>

              {/* CTA */}
              <div className="mt-10 flex items-center gap-5">
                <button className="
                  rounded-full bg-blue-600 px-8 py-3
                  text-[15px] font-semibold text-white
                  shadow-xl shadow-blue-600/20
                  hover:bg-blue-700 transition-all
                ">
                  Get Free Demo
                </button>

                <button className="
                  rounded-full border border-slate-300
                  px-8 py-3 text-[15px] font-medium
                  text-slate-600 hover:bg-slate-50
                  transition-all
                ">
                  Explore Solutions
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Companies />
    </>
  )
}
