import {
  Bot,
  Database,
  Cloud,
  ShieldCheck,
  Workflow,
  BarChart3,
  Clock,
  Headphones,
  Users,
  Award,
  Phone,
  ArrowRight,
} from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-7 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Tag */}
        <div className="mb-6 text-center">
          <span className="
            inline-flex items-center
            rounded-xl
            border border-slate-300/70
            bg-white/60
            px-4 py-1.5
            text-xs font-medium
            text-slate-600
            backdrop-blur-sm
          ">
            PLATFORM FEATURES
          </span>
        </div>

        {/* Heading */}
        <h2 className="
          mb-4
          text-center
          text-3xl sm:text-4xl md:text-5xl
          font-semibold
          tracking-tight
          text-slate-600
        ">
          Why Choose BlackBatAI?
        </h2>

        {/* Subheading */}
        <p className="
          mx-auto
          mb-16
          max-w-2xl
          text-center
          text-sm sm:text-base
          leading-relaxed
          text-slate-500
        ">
          Built with cutting-edge technology and designed for the Indian market.
          Here’s what actually makes us different.
        </p>

        {/* ===== FEATURE CARDS ===== */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 md:grid-cols-3 mb-24">

          {[
            {
              icon: Bot,
              title: "AI-Powered Automation",
              desc: "Automate repetitive tasks with intelligent workflows that adapt to how your business actually runs.",
            },
            {
              icon: Database,
              title: "Centralized Data",
              desc: "A single source of truth for all your business data, synced in real time across every module.",
            },
            {
              icon: Cloud,
              title: "Cloud-Native Platform",
              desc: "Secure, scalable cloud infrastructure with automatic updates and zero maintenance stress.",
            },
            {
              icon: ShieldCheck,
              title: "Enterprise Security",
              desc: "Bank-grade encryption, role-based access, and compliance with global data protection standards.",
            },
            {
              icon: Workflow,
              title: "Custom Workflows",
              desc: "Design and automate processes visually — no coding, no drama, just clean execution.",
            },
            {
              icon: BarChart3,
              title: "Advanced Analytics",
              desc: "Real-time dashboards, custom reports, and predictive insights to make smarter calls.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                group
                rounded-2xl
                border border-slate-200/80
                bg-white
                p-8
                transition-all duration-300
                hover:-translate-y-[2px]
                hover:shadow-lg hover:shadow-slate-200/40
              "
            >
              <div className="
                mb-6
                flex h-14 w-14
                items-center justify-center
                rounded-xl
                bg-blue-50
              ">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-slate-700">
                {item.title}
              </h3>

              <p className="text-[15px] leading-relaxed text-slate-500 font-medium">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* ===== BLUE CTA CARD (DIRECTLY BELOW) ===== */}
        <div className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-gradient-to-br from-blue-600 to-blue-700
          px-8 py-12 md:px-14 md:py-16
          text-white
        ">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Ready to Transform Your Business?
              </h3>

              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-blue-100">
                Join 500+ businesses that have already made the switch to
                BlackBatAI. Get a personalized demo and see the difference.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-white
                  px-6 py-3
                  text-sm font-semibold
                  text-blue-700
                  hover:bg-blue-50
                  transition
                ">
                  Schedule Demo
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/30
                  px-6 py-3
                  text-sm font-medium
                  text-white
                  hover:bg-white/10
                  transition
                ">
                  <Phone className="h-4 w-4" />
                  Call Now
                </button>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Clock, value: "< 7 Days", label: "Quick Setup" },
                { icon: Headphones, value: "24/7", label: "Support" },
                { icon: Users, value: "Free", label: "Training" },
                { icon: Award, value: "99%", label: "Satisfaction" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    rounded-2xl
                    border border-white/20
                    bg-white/10
                    p-6
                    backdrop-blur-sm
                  "
                >
                  <item.icon className="h-6 w-6 text-white/80 mb-4" />
                  <p className="text-2xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-sm text-blue-100">{item.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
