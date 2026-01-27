import HomeHero from "../components/home/HomeHero"
import HomeAbout from "../components/home/homeabout"
import Homesectwo from "../components/home/Homesectwo"
import HomeBenifits from "../components/home/HomeBenifits"
import WhyChooseUs from "../components/home/HomeWhyChooseUs"
import Testimonials from "../components/testimonials"
import Pricing from "../components/pricing"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="w-full">
      {/* Navbar stays */}

      {/* Hero */}
      <section id="home">
        <HomeHero />
      </section>

      {/* Home About (NEW) */}
      <section id="home-about">
        <HomeAbout />
      </section>

      {/* Section Two */}
      <section id="about">
        <Homesectwo />
      </section>

      {/* Benefits */}
      <section id="benefits">
        <HomeBenifits />
      </section>

      {/* Process / Solutions */}
      <section id="solutions">
        <WhyChooseUs />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Pricing */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}
