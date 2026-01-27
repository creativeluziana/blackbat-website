export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f5f8ff] to-white py-20 md:py-28">

      {/* DOT GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,130,246,0.06)_1px,_transparent_1px)] bg-[size:26px_26px] opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-16 items-center">

          {/* LEFT — TILTED BLUE CARD */}
          <div className="relative">

            {/* BACK LAYER */}
            <div className="
              absolute inset-0
              hidden md:block
              -rotate-3
              rounded-[36px]
              bg-blue-600
            " />

            {/* FRONT CARD */}
            <div className="
              relative
              rounded-[28px] md:rounded-[36px]
              bg-gradient-to-br from-blue-600 to-blue-500
              p-7 sm:p-8 md:p-10
              text-white
            ">

              {/* ICON */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-black/30">
                <div className="h-5 w-5 rounded-full border-2 border-blue-300" />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Our Journey
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-blue-100 mb-5">
                Founded in 2018, BlackBatAI emerged from a simple observation:
                Indian businesses deserve world-class ERP solutions tailored
                to their unique needs.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-blue-100">
                Today, we serve 500+ clients across 10+ industries — from schools
                in Tier-2 cities to manufacturing giants in metro hubs.
              </p>

              {/* STATS */}
              <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold">2018</p>
                  <p className="text-xs sm:text-sm text-blue-200 mt-1">
                    Year Founded
                  </p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold">150+</p>
                  <p className="text-xs sm:text-sm text-blue-200 mt-1">
                    Team Members
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — TEXT CONTENT */}
          <div>

            {/* OUR STORY — MATCHING PILL */}
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
              OUR STORY
            </span>

            <h2 className="
              mt-6
              text-[2.1rem] sm:text-4xl md:text-5xl
              font-semibold
              tracking-tight
              leading-[1.15]
              text-slate-700
            ">
              Building the Future of
              <br />
              <span className="text-blue-600">
                Enterprise Software
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
              It all started when our founders, working at leading IT firms,
              noticed a gap. Indian businesses were either stuck with expensive
              foreign ERPs or struggling with outdated local solutions.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              We set out to change that — building an AI-powered ERP platform
              that’s as powerful as SAP, yet as intuitive as your favorite
              mobile app.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Seven years later, that vision is a reality.
              <span className="font-semibold text-slate-700">
                {" "}Technology should empower, not complicate.
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
