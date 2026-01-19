import hero from "../../assets/hero.png"
import Companies from "./Companies"

export default function HomeHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf2ff] via-[#f2f7ff] to-white pt-28 pb-0">

        {/* DOT GRID */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.08)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-60" />

        {/* Background Mists - More Prominent */}
        <div className="absolute top-20 -left-32 h-[600px] w-[600px] rounded-full bg-blue-400/30 blur-[120px]" />
        <div className="absolute bottom-20 -right-32 h-[700px] w-[700px] rounded-full bg-blue-300/25 blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-200/20 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl text-center px-6 z-10">
          <h1 className="text-4xl font-semibold leading-[1.2] tracking-tight text-slate-900 md:text-5xl">
            <span className="block text-[#9fb3d0] mb-3">
              Your AI-powered edge —
            </span>
            <span className="block text-slate-800">
              Automate, <span className="text-[#9fb3d0]">Optimize</span> and <span className="text-slate-600">Dominate</span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 font-medium">
            Gain a competitive edge with AI-powered automation that streamlines
            workflows, optimizes performance, and drives growth
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button className="rounded-full bg-blue-600 px-8 py-3 text-[15px] font-semibold text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all hover:shadow-blue-600/30">
              Get started
            </button>
            <button className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-all px-8 py-3 border border-slate-600 rounded-full hover:bg-slate-50">
              Contact sales
            </button>
          </div>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="relative mt-16 flex justify-center z-0">
          {/* The image itself */}
          <div className="relative rounded-t-2xl bg-white/40 p-2 pb-0 shadow-2xl backdrop-blur-sm ring-1 ring-white/60 mx-4">
            <img
              src={hero}
              alt="Dashboard preview"
              className="w-full max-w-[1100px] rounded-t-xl shadow-sm border-x border-t border-slate-200/60"
            />
            {/* STRAIGHT CUT OVERLAY */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white to-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* COMPAINES */}
      <Companies />
    </>
  )
}
