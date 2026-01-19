import {
  LayoutGrid,
  Users,
  BarChart3,
  ShieldCheck,
  Clock,
  Database,
} from "lucide-react"

export default function HomeProcess() {
  return (
    <section className="bg-white px-10 py-28">
      <div className="mx-auto max-w-7xl">

        {/* Tag */}
        <div className="mb-6 text-center">
          <span className="inline-flex items-center rounded-xl border border-slate-300/70 bg-white/60 px-4 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm">
            Process
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-20 text-center text-4xl font-semibold tracking-tight text-slate-600 md:text-5xl">
          Automate portfolio management
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-3">

          {[
            {
              icon: LayoutGrid,
              title: "AI summary",
              desc: "Leverage AI-powered summaries to extract key insights from complex data, making decisions faster.",
            },
            {
              icon: Users,
              title: "27+ Team",
              desc: "Backed by a team of 27+ experts, we bring deep industry knowledge and innovative solutions.",
            },
            {
              icon: BarChart3,
              title: "Automated dashboard",
              desc: "Stay organized with an intelligent dashboard that automatically updates, categorizes, and presents data.",
            },
            {
              icon: ShieldCheck,
              title: "Team access",
              desc: "Manage permissions and collaborate effortlessly with secure team access controls.",
            },
            {
              icon: Clock,
              title: "Real-time insights",
              desc: "Gain up-to-the-minute insights that help you track performance, identify trends, and decide confidently.",
            },
            {
              icon: Database,
              title: "Smart data extraction",
              desc: "Eliminate manual data entry with AI-driven extraction that structures unorganized information.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-start text-left"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-slate-600">
                {item.title}
              </h3>

              <p className="max-w-sm text-[15px] leading-relaxed text-slate-500 font-medium">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
