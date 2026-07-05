import Hero from "../components/home/Hero"
import NavBar from "../components/navigationBar/NavBar"
import AboutUs from "../components/aboutUs/AboutUs"
import Services from "../components/services/Services"
import Contact from "../components/contact/Contact"
import ContactButton from "../components/contactButton/ContactButton"
import Experience from "../components/experience/Experience"
import Footer from "../components/footer/Footer.jsx"

function App() {
  return (
    <div>
      {/* Skip to content — visible on focus for keyboard users */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-raven focus:text-white focus:rounded-badge focus:font-semibold focus:shadow-lg focus:outline-none"
      >
        Saltar al contenido principal
      </a>
      <NavBar />
      <Hero/>
      <Services/>
      <Experience/>
      <AboutUs/>
      <Contact/>
      <ContactButton/>
      <Footer/>
    </div>
  )
}

export default App
