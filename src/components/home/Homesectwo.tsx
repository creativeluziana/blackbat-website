export default function Homesectwo() {
  return (
    <section className="relative bg-white px-10 py-28 overflow-hidden">
      {/* Background Mists - More Prominent */}
      <div className="absolute top-10 -right-40 h-[700px] w-[700px] rounded-full bg-blue-300/35 blur-[130px]" />
      <div className="absolute bottom-10 -left-40 h-[700px] w-[700px] rounded-full bg-indigo-200/30 blur-[130px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-100/25 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl z-10">

        {/* Features Label */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center rounded-xl border border-slate-300/70 bg-white/60 px-4 py-1.5 text-xs font-medium text-slate-500 backdrop-blur-sm">
            Features
          </span>
        </div>

        {/* Heading */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl font-semibold text-slate-600 md:text-5xl tracking-tight">
            AI-driven features for
            <br />
            smarter investing
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">

          {/* FEATURE 1 */}
          <div className="group">
            <div className="mb-8 aspect-square flex items-center justify-center rounded-[40px] bg-gray-50 p-10 transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="w-full h-full rounded-2xl bg-white shadow-sm p-4 flex flex-col gap-3 overflow-hidden border border-slate-100">
                <div className="h-14 w-full rounded-lg bg-blue-50 border border-blue-100 flex items-center px-4 gap-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                  <div>
                    <div className="h-3 w-24 bg-slate-200 rounded"></div>
                    <div className="h-2 w-16 bg-slate-100 rounded mt-1"></div>
                  </div>
                </div>
                <div className="h-14 w-full rounded-lg bg-white border border-slate-100 flex items-center px-4 gap-3">
                  <div className="w-4 h-4 border border-slate-300 rounded-sm"></div>
                  <div>
                    <div className="h-3 w-24 bg-slate-200 rounded"></div>
                    <div className="h-2 w-16 bg-slate-100 rounded mt-1"></div>
                  </div>
                </div>
                <div className="h-14 w-full rounded-lg bg-white border border-slate-100 flex items-center px-4 gap-3">
                  <div className="w-4 h-4 border border-slate-300 rounded-sm"></div>
                  <div>
                    <div className="h-3 w-24 bg-slate-200 rounded"></div>
                    <div className="h-2 w-16 bg-slate-100 rounded mt-1"></div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-600">
              Document Management
            </h3>

            <p className="mt-3 text-[15px] leading-relaxed text-slate-500 font-medium">
              Effortlessly organize, store, and access all your investment
              documents in one secure place.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className="group">
            <div className="mb-8 aspect-square flex items-center justify-center rounded-[40px] bg-blue-50 p-10 transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="absolute inset-4 bg-white/40 rounded-3xl backdrop-blur-sm border border-white/50"></div>
                <div className="relative z-10 w-full p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-blue-200/50 mx-auto rounded-full"></div>
                    <div className="h-2 w-1/2 bg-blue-200/50 mx-auto rounded-full"></div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className="h-8 w-full bg-white rounded-full shadow-sm flex items-center px-3 gap-2">
                      <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                      <div className="h-1.5 w-20 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-600">
              AI-powered term extraction
            </h3>

            <p className="mt-3 text-[15px] leading-relaxed text-slate-500 font-medium">
              Leverage AI to automatically extract key terms from investment
              documents, saving time.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div className="group">
            <div className="mb-8 aspect-square flex items-center justify-center rounded-[40px] bg-gray-50 p-10 transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="w-full flex flex-col gap-4 items-center justify-center">
                <div className="w-full bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 transform -rotate-2 origin-bottom-left">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-20 bg-slate-800 rounded mb-1.5"></div>
                    <div className="h-2 w-32 bg-slate-200 rounded"></div>
                  </div>
                  <div className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">Design</div>
                </div>

                <div className="w-full bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 relative z-10 scale-105">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="avatar" className="w-full h-full" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-20 bg-slate-800 rounded mb-1.5"></div>
                    <div className="h-2 w-32 bg-slate-200 rounded"></div>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">Dev</div>
                </div>

                <div className="w-full bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 transform rotate-2 origin-bottom-right">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" alt="avatar" className="w-full h-full" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2.5 w-20 bg-slate-800 rounded mb-1.5"></div>
                    <div className="h-2 w-32 bg-slate-200 rounded"></div>
                  </div>
                  <div className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium">Product</div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-600">
              Team-Managed Portfolio
            </h3>

            <p className="mt-3 text-[15px] leading-relaxed text-slate-500 font-medium">
              Seamlessly track your portfolio while managing team permissions
              and access.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
