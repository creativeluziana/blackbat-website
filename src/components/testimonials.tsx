import { useState } from "react"
import guy from "../assets/guy.png"

const testimonials = [
  {
    title: "Personalized AI, redefined with blackbox.ai",
    quote:
      "Working with this AI has been a game changer. It feels like the system truly listens and adapts to what I need — whether I’m brainstorming ideas or looking for detailed insights. Every interaction feels personal, and I never feel like I’m talking to a machine.",
    name: "Sarat Mitchell",
    role: "CEO of BrightPath Solutions",
  },
  {
    title: "AI that understands context",
    quote:
      "blackbox.ai has completely changed how we work with data. The insights feel natural and contextual, not robotic. It’s like having a smart teammate who already understands your goals.",
    name: "Daniel Foster",
    role: "Product Lead, NovaLabs",
  },
  {
    title: "Built for real teams",
    quote:
      "What impressed us most was how seamlessly blackbox.ai fit into our workflows. From onboarding to daily use, everything felt intuitive and thoughtfully designed.",
    name: "Alicia Gomez",
    role: "Operations Director, Finverse",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [flip, setFlip] = useState<"next" | "prev" | null>(null)

  const flipNext = () => {
    setFlip("next")
    setTimeout(() => {
      setIndex((i) => (i + 1) % testimonials.length)
      setFlip(null)
    }, 450)
  }

  const flipPrev = () => {
    setFlip("prev")
    setTimeout(() => {
      setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
      setFlip(null)
    }, 450)
  }

  const t = testimonials[index]

  return (
    <section className="relative bg-white px-10 py-32 overflow-hidden">
      {/* Background Mists - More Prominent */}
      <div className="absolute top-1/2 -left-40 h-[700px] w-[700px] rounded-full bg-blue-300/35 blur-[130px]" />
      <div className="absolute top-0 -right-40 h-[700px] w-[700px] rounded-full bg-sky-200/30 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl z-10">

        {/* Tag */}
        <div className="mb-6 text-center">
          <span className="inline-flex rounded-xl border border-slate-300/60 bg-white/60 px-4 py-1.5 text-xs font-medium text-slate-500 backdrop-blur-sm">
            Testimonial
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-24 text-center text-4xl font-semibold tracking-tight text-slate-600 md:text-5xl">
          Trusted by users like you
        </h2>

        <div className="grid items-center gap-24 md:grid-cols-2">

          {/* LEFT TEXT (STATIC) */}
          <div>
            <h3 className="mb-8 text-2xl font-medium text-slate-700">
              {t.title}
            </h3>

            <p className="mb-16 text-[17.5px] leading-[1.95] text-slate-500">
              “{t.quote}”
            </p>

            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-lg font-medium text-slate-700">
                  {t.name}
                </p>
                <p className="text-[15px] text-slate-500">
                  {t.role}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={flipPrev}
                  disabled={!!flip}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-500 hover:bg-slate-100"
                >
                  ←
                </button>
                <button
                  onClick={flipNext}
                  disabled={!!flip}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE — PAGE FLIP ONLY */}
          <div className="relative flex justify-center perspective">

            {/* Blue mist */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-[420px] w-[420px] rounded-full bg-blue-100/70 blur-3xl"></div>
            </div>

            <img
              src={guy}
              alt={t.name}
              className={`h-[420px] w-[400px] rounded-3xl object-cover image-page ${flip === "next"
                ? "flip-next"
                : flip === "prev"
                  ? "flip-prev"
                  : ""
                }`}
            />
          </div>
        </div>

        {/* PAGE FLIP STYLES */}
        <style>{`
          .perspective {
            perspective: 1600px;
          }

          .image-page {
            transform-style: preserve-3d;
            transition: transform 0.45s ease-in-out;
            transform-origin: right center;
          }

          .flip-next {
            transform: rotateY(-22deg);
          }

          .flip-prev {
            transform-origin: left center;
            transform: rotateY(22deg);
          }
        `}</style>

      </div>
    </section>
  )
}
