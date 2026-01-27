import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/home"
import AboutUs from "./pages/aboutus"
import Solutions from "./pages/solutions"

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </>
  )
}
