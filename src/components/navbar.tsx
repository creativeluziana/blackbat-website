import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)

    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav className="sticky top-0 z-[1000] relative bg-[#fbfdff]/90 backdrop-blur-md border-b border-blue-100/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#1a2b4b]"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md">
            B
          </div>
          blackbat.ai
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 text-[15px] font-semibold text-[#1a2b4b]/70">
          {navLinks.map((link) =>
            link.path ? (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ) : (
              <li
                key={link.name}
                onClick={() => scrollToSection(link.id!)}
                className="cursor-pointer hover:text-blue-600 transition"
              >
                {link.name}
              </li>
            )
          )}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-full bg-blue-600 px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 hover:scale-105 active:scale-95"
          >
            Get Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-[#1a2b4b]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden absolute left-0 right-0 top-full bg-white border-b border-blue-100 shadow-xl transition-all duration-300 origin-top
          ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}
        `}
      >
        <ul className="flex flex-col px-6 py-6 gap-6 text-lg font-semibold text-[#1a2b4b]">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.path ? (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  onClick={() => scrollToSection(link.id!)}
                  className="block w-full text-left hover:text-blue-600 transition"
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="pt-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full rounded-xl bg-blue-600 py-3 text-white font-bold shadow-md active:scale-95 transition"
            >
              Get Demo
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
