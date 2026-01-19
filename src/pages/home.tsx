import Navbar from "../components/navbar"
import HomeHero from "../components/home/HomeHero"
import Homesectwo from "../components/home/Homesectwo"
import HomeBenifits from "../components/home/HomeBenifits"
import HomeProcess from "../components/home/HomeProcess"
import Testimonials from "../components/testimonials"
import Pricing from "../components/pricing"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <HomeHero />
      <Homesectwo />
      <HomeBenifits />
      <HomeProcess />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
