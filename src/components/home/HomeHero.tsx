import hero from "../../assets/hero.png"
import Companies from "./Companies"

export default function HomeHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf2ff] via-[#f2f7ff] to-white pt-28 pb-0">

        {/* DOT GRID */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.08)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-60" />

        {/* BACKGROUND MISTS */}
        <div className="absolute top-20 -left-32 h-[600px] w-[600px] rounded-full bg-blue-400/30 blur-[120px]" />
        <div className="absolute bottom-20 -right-32 h-[700px] w-[700px] rounded-full bg-blue-300/25 blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-200/20 blur-[100px]" />

        {/* CONTENT */}
        <div className="relative mx-auto max-w-7xl text-center px-6 z-10">

          {/* ONE-LINE HEADING (SMALLER) */}
          <h1
            className="
              font-semibold tracking-tight text-slate-800
              leading-[1.05]
              text-[2.1rem]
              sm:text-[2.6rem]
              md:text-[3.2rem]
              lg:text-[3.7rem]
              xl:text-[4.1rem]
              whitespace-nowrap
            "
          >
            One Platform,{" "}
            <span className="text-[#9fb3d0]">Infinite</span>{" "}
            <span className="text-slate-800">Possibilities.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 font-medium">
            India's most comprehensive AI-powered ERP ecosystem.
            10+ industry-specific solutions designed to transform your business
            operations from day one.
          </p>

          {/* CTA */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button className="rounded-full bg-blue-600 px-8 py-3 text-[15px] font-semibold text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all hover:shadow-blue-600/30">
              Get started
            </button>
            <button className="rounded-full border border-slate-600 px-8 py-3 text-[15px] font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all">
              Contact sales
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative mt-20 flex justify-center z-0">
          <div className="relative mx-4 rounded-t-2xl bg-white/40 p-2 pb-0 shadow-2xl backdrop-blur-sm ring-1 ring-white/60">
            <img
              src={hero}
              alt="Dashboard preview"
              className="w-full max-w-[1100px] rounded-t-xl shadow-sm border-x border-t border-slate-200/60"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white to-transparent z-10" />
          </div>
        </div>
      </section>

      <Companies />
    </>
  )
}
