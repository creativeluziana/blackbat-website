export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-white px-10 py-28">
      {/* Background Mists - More Prominent */}
      <div className="absolute top-1/4 -left-48 h-[700px] w-[700px] rounded-full bg-blue-300/30 blur-[130px]" />
      <div className="absolute bottom-1/4 -right-48 h-[700px] w-[700px] rounded-full bg-sky-300/25 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-20 md:grid-cols-2 items-center z-10">

        {/* LEFT CONTENT */}
        <div>
          {/* small pill */}
          <span className="inline-block rounded-full border border-blue-200 bg-white/70 px-4 py-1 text-sm font-medium text-blue-600 backdrop-blur">
            Ready to take the next step
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-600 md:text-5xl">
            Contact us and begin <br />
            your AI journey
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-500">
            Contact us today and take the first step towards unlocking the full
            potential of personalized AI tailored just for you.
          </p>

          <button className="mt-8 inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
            Get started
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className="relative">
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-blue-100/50">
            <h3 className="mb-6 text-lg font-semibold text-slate-800">
              Get started with blackbox.ai
            </h3>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-500">
                    FIRST NAME*
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-500">
                    LAST NAME*
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">
                  EMAIL*
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">
                  COMPANY*
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
