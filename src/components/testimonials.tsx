import { useState } from "react"
import guy1 from "../assets/guy1.png"
import guy2 from "../assets/guy2.png"
import guy3 from "../assets/guy3.png"

const testimonials = [
  {
    title: "Personalized AI, redefined with blackbox.ai",
    quote:
      "Working with this AI has been a game changer. It feels like the system truly listens and adapts to what I need — whether I’m brainstorming ideas or looking for detailed insights. Every interaction feels personal, and I never feel like I’m talking to a machine.",
    name: "Sarat Mitchell",
    role: "CEO of BrightPath Solutions",
    image: guy1,
  },
  {
    title: "AI that understands context",
    quote:
      "blackbox.ai has completely changed how we work with data. The insights feel natural and contextual, not robotic. It’s like having a smart teammate who already understands your goals.",
    name: "Daniel Foster",
    role: "Product Lead, NovaLabs",
    image: guy2,
  },
  {
    title: "Built for real teams",
    quote:
      "What impressed us most was how seamlessly blackbox.ai fit into our workflows. From onboarding to daily use, everything felt intuitive and thoughtfully designed.",
    name: "Alicia Gomez",
    role: "Operations Director, Finverse",
    image: guy3,
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [flip, setFlip] = useState<"next" | "prev" | null>(null)

  const flipNext = () => {
    if (flip) return
    setFlip("next")
    setTimeout(() => {
      setIndex((i) => (i + 1) % testimonials.length)
      setFlip(null)
    }, 450)
  }

  const flipPrev = () => {
    if (flip) return
    setFlip("prev")
    setTimeout(() => {
      setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
      setFlip(null)
    }, 450)
  }

  const t = testimonials[index]

  return (
    <section className="relative bg-white px-6 md:px-10 py-24 md:py-32 overflow-hidden">

      {/* Background Mists */}
      <div className="absolute top-1/2 -left-40 h-[700px] w-[700px] rounded-full bg-blue-300/35 blur-[130px]" />
      <div className="absolute top-0 -right-40 h-[700px] w-[700px] rounded-full bg-sky-200/30 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl z-10">

        {/* PILL — CONTACT STYLE */}
        <div className="mb-6 text-center">
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
            TESTIMONIALS
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-16 md:mb-24 text-center text-3xl md:text-5xl font-semibold tracking-tight text-slate-600">
          Trusted by users like you
        </h2>

        <div className="grid items-center gap-16 md:gap-24 md:grid-cols-2">

          {/* IMAGE — FIRST ON MOBILE */}
          <div className="order-1 md:order-2 relative flex justify-center perspective">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-[360px] w-[360px] md:h-[420px] md:w-[420px] rounded-full bg-blue-100/70 blur-3xl"></div>
            </div>

            <img
              src={t.image}
              alt={t.name}
              className={`h-[360px] w-[320px] md:h-[420px] md:w-[400px] rounded-3xl object-cover image-page ${
                flip === "next"
                  ? "flip-next"
                  : flip === "prev"
                  ? "flip-prev"
                  : ""
              }`}
            />
          </div>

          {/* TEXT — SECOND ON MOBILE, JUSTIFIED */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="w-[320px] md:w-full text-justify md:text-left">

              <h3 className="mb-6 text-xl md:text-2xl font-medium text-slate-700">
                {t.title}
              </h3>

              <p className="mb-10 text-[16px] md:text-[17.5px] leading-[1.85] text-slate-500">
                “{t.quote}”
              </p>

              <div className="mb-8">
                <p className="text-lg font-medium text-slate-700">
                  {t.name}
                </p>
                <p className="text-[15px] text-slate-500">
                  {t.role}
                </p>
              </div>

              {/* Controls */}
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
        </div>

        {/* PAGE FLIP STYLES — UNCHANGED */}
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
