
import Footer from "../components/footer"

export default function AboutUs() {
  return (
    <div className="w-full">


      <section className="relative bg-gradient-to-b from-[#eaf2ff] via-[#f4f8ff] to-white px-10 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-800">
            About BlackBox AI
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            BlackBox AI is built to simplify complexity. We design intelligent
            systems that help businesses automate workflows, unlock insights,
            and scale confidently using AI-first solutions.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-5xl grid gap-12 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-lg font-semibold text-slate-800">
              Our Mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To empower businesses with accessible, scalable, and reliable
              AI-driven platforms.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-lg font-semibold text-slate-800">
              Our Vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              A future where intelligent automation is effortless and universal.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-lg font-semibold text-slate-800">
              Our Values
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Clarity, trust, innovation, and human-centered AI design.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
