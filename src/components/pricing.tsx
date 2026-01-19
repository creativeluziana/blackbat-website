export default function Pricing() {
  return (
    <section className="bg-white px-10 py-32">
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-flex rounded-xl border border-slate-300/60 bg-white/70 px-4 py-1.5 text-xs font-medium text-slate-500">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-medium tracking-tight text-slate-700 md:text-5xl">
            Start for free, scale as you grow
          </h2>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* FREE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-lg font-medium text-slate-700">Free</h3>

            <p className="mt-4 text-sm text-slate-500">Start at</p>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-4xl font-semibold text-slate-700">$0</span>
              <span className="text-sm text-slate-500">/ month</span>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Perfect for individuals, small teams exploring AI-powered insights.
            </p>

            <button className="mt-6 w-full rounded-full border border-slate-300 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100">
              Choose plan
            </button>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="mb-4 text-sm font-medium text-slate-600">
                Free plan features
              </p>

              <ul className="space-y-3 text-sm text-slate-500">
                <li>✓ Basic document processing</li>
                <li>✓ Limited AI summaries</li>
                <li>✓ 1 user access</li>
                <li>✓ Standard support</li>
              </ul>
            </div>
          </div>

          {/* PREMIUM */}
          <div className="relative rounded-3xl border border-blue-300 bg-gradient-to-b from-blue-50 to-white p-8 shadow-lg">
            <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
              Best Deal
            </span>

            <h3 className="text-lg font-medium text-slate-700">Premium</h3>

            <p className="mt-4 text-sm text-slate-500">Start at</p>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-4xl font-semibold text-slate-700">$25</span>
              <span className="text-sm text-slate-500">/ month</span>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              For growing businesses that need advanced automation and insights.
            </p>

            <button className="mt-6 w-full rounded-full bg-blue-600 py-3 text-sm font-medium text-white shadow hover:bg-blue-700">
              Choose plan
            </button>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="mb-4 text-sm font-medium text-slate-600">
                Free plan features, plus
              </p>

              <ul className="space-y-3 text-sm text-slate-500">
                <li>✓ Unlimited document processing</li>
                <li>✓ AI-powered analytics & tracking</li>
                <li>✓ Team collaboration tools</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
          </div>

          {/* ENTERPRISE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-lg font-medium text-slate-700">Enterprise</h3>

            <p className="mt-4 text-sm text-slate-500">Start at</p>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-4xl font-semibold text-slate-700">$45</span>
              <span className="text-sm text-slate-500">/ month</span>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Tailored for large-scale operations with custom needs.
            </p>

            <button className="mt-6 w-full rounded-full border border-slate-300 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100">
              Contact sales
            </button>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="mb-4 text-sm font-medium text-slate-600">
                Premium plan features, plus
              </p>

              <ul className="space-y-3 text-sm text-slate-500">
                <li>✓ Fully customizable features</li>
                <li>✓ Advanced security & compliance</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Premium integrations</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
