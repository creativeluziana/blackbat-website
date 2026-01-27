import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-white px-6 md:px-10 py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between h-full">

          {/* TOP CONTENT */}
          <div>
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
            CONTACT US
            </span>


            <h2 className="
              mt-6
              text-4xl md:text-5xl
              font-semibold
              tracking-tight
              leading-tight
              text-slate-900
            ">
              Let&apos;s Discuss Your <br />
              Needs
            </h2>

            <p className="
              mt-6
              max-w-md
              text-[15px]
              leading-relaxed
              text-slate-600
            ">
              Ready to transform your business operations? Fill out the form and
              our team will get back to you within 24 hours with a personalized
              solution.
            </p>
          </div>

          {/* CONTACT CARDS (BOTTOM-ALIGNED) */}
          <div className="mt-12 space-y-6 max-w-md">

            {[
              {
                label: "Call Us",
                value: "+91 98765 43210",
                icon: Phone,
              },
              {
                label: "Email Us",
                value: "info@blackbatai.com",
                icon: Mail,
              },
              {
                label: "Visit Us",
                value: "123 Tech Park, Sector 62, Noida",
                icon: MapPin,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex items-center gap-4
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  px-6 py-5
                  shadow-sm
                "
              >
                <div className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  bg-blue-100
                  text-blue-600
                ">
                  <item.icon size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-blue-600">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-slate-800">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="h-full">
          <div className="h-full rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-blue-100/50 flex flex-col">

            <h3 className="text-2xl font-semibold text-slate-900">
              Request a Demo
            </h3>

            <form className="mt-8 space-y-6 flex-1">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-blue-200 px-5 py-3.5 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-blue-200 px-5 py-3.5 text-sm outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-blue-200 px-5 py-3.5 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full rounded-xl border border-blue-200 px-5 py-3.5 text-sm outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-xl border border-blue-200 px-5 py-4 text-sm outline-none resize-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="
                  mt-auto
                  w-full
                  flex items-center justify-center gap-2
                  rounded-full
                  bg-blue-600
                  py-4
                  text-sm font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Send Message
                <Send size={16} />
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
