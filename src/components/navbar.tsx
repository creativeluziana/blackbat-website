export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#eaf2ff] to-[#f4f8ff]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-slate-800 text-xl tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clipRule="evenodd" />
            </svg>
          </div>
          blackbox.ai
        </div>

        <ul className="hidden gap-8 text-[15px] font-medium text-slate-600 md:flex">
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Product</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Resources</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Blogs</li>
        </ul>

        <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all hover:shadow-blue-600/30">
          Get started
        </button>
      </div>
    </nav>
  )
}
