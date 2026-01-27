export default function Pricing() {
  return (
    <section className="bg-white px-6 sm:px-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="mb-4 inline-flex rounded-full border border-slate-300/60 px-4 py-1.5 text-xs font-medium text-slate-500">
            PRICING PLANS
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-800">
            Simple, Transparent Pricing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-slate-500">
            Choose the plan that fits your business. All plans include free setup,
            training, and 24/7 support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* STARTER — mobile order 2 */}
          <div className="order-2 md:order-1 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-slate-800">Starter</h3>

            <p className="mt-4 text-sm text-slate-500">
              Perfect for small businesses
            </p>

            <div className="mt-3 flex items-end gap-1">
              <span className="text-4xl font-bold text-slate-900">₹9,999</span>
              <span className="text-sm text-slate-500">/ month</span>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Perfect for individuals, small teams exploring AI-powered insights.
            </p>

            <button className="mt-8 w-full rounded-full border border-slate-300 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Choose plan
            </button>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="mb-4 text-sm font-medium text-slate-600">
                Starter plan features
              </p>

              <ul className="space-y-3 text-sm text-slate-500">
                <li>✓ 1 ERP Module</li>
                <li>✓ Up to 10 Users</li>
                <li>✓ 50GB Storage</li>
                <li>✓ Email Support</li>
                <li>✓ Basic Reports</li>
                <li>✓ Mobile App</li>
              </ul>
            </div>
          </div>

          {/* PREMIUM — mobile order 1 (FIRST) */}
          <div className="order-1 md:order-2 relative rounded-3xl border border-blue-400 bg-blue-50 p-8 sm:p-10 shadow-lg">
            <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
              Best Deal
            </span>

            <h3 className="text-xl font-semibold text-slate-800">Premium</h3>

            <p className="mt-4 text-sm text-slate-500">Most popular choice</p>

            <div className="mt-3 flex items-end gap-1">
              <span className="text-4xl font-bold text-slate-900">₹24,999</span>
              <span className="text-sm text-slate-500">/ month</span>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              For growing businesses that need advanced automation and insights.
            </p>

            <button className="mt-8 w-full rounded-full bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700">
              Choose plan
            </button>

            <div className="mt-10 border-t border-blue-200 pt-6">
              <p className="mb-4 text-sm font-medium text-slate-600">
                Everything in Starter, plus
              </p>

              <ul className="space-y-3 text-sm text-slate-500">
                <li>✓ Up to 5 ERP Modules</li>
                <li>✓ Up to 50 Users</li>
                <li>✓ 50GB Storage</li>
                <li>✓ Priority Support</li>
                <li>✓ Advanced Analytics</li>
                <li>✓ API Access</li>
                <li>✓ Custom Workflows</li>
              </ul>
            </div>
          </div>

          {/* ENTERPRISE — mobile order 3 */}
          <div className="order-3 md:order-3 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-slate-800">Enterprise</h3>

            <p className="mt-4 text-sm text-slate-500">Custom pricing</p>

            <div className="mt-3">
              <span className="text-4xl font-bold text-slate-900">Custom</span>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Tailored for large-scale operations with custom needs.
            </p>

            <button className="mt-8 w-full rounded-full border border-slate-300 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Contact sales
            </button>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="mb-4 text-sm font-medium text-slate-600">
                Everything in Premium, plus
              </p>

              <ul className="space-y-3 text-sm text-slate-500">
                <li>✓ Unlimited Modules</li>
                <li>✓ Unlimited Users</li>
                <li>✓ Unlimited Storage</li>
                <li>✓ Dedicated Manager</li>
                <li>✓ On-premise Option</li>
                <li>✓ Custom Development</li>
                <li>✓ SLA Guarantee</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
