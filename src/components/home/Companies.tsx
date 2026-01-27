export default function Companies() {
  const logos = [
    {
      name: "hotjar",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
        </svg>
      ),
    },
    {
      name: "loom",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      name: "lattice",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" />
        </svg>
      ),
    },
    {
      name: "evernote",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative bg-white py-10 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-[2000px]">

        <div className="flex w-[200%] animate-infinite-scroll">

          {/* First loop */}
          <div className="flex w-1/2 items-center gap-12 md:gap-16 justify-around">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="
                  flex
                  min-w-[70vw] sm:min-w-[45vw] md:min-w-[auto]
                  items-center justify-center
                  gap-4
                  text-xl md:text-3xl
                  font-semibold md:font-bold
                  text-slate-500
                  grayscale opacity-60
                  hover:grayscale-0 hover:opacity-100
                  transition-all duration-500
                "
              >
                {logo.icon}
                <span>{logo.name}</span>
              </div>
            ))}
          </div>

          {/* Duplicate loop */}
          <div className="flex w-1/2 items-center gap-12 md:gap-16 justify-around">
            {logos.map((logo, i) => (
              <div
                key={`dup-${i}`}
                className="
                  flex
                  min-w-[70vw] sm:min-w-[45vw] md:min-w-[auto]
                  items-center justify-center
                  gap-4
                  text-xl md:text-3xl
                  font-semibold md:font-bold
                  text-slate-500
                  grayscale opacity-60
                  hover:grayscale-0 hover:opacity-100
                  transition-all duration-500
                "
              >
                {logo.icon}
                <span>{logo.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
