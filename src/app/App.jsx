import Hero from "../components/home/Hero"
import NavBar from "../components/navigationBar/NavBar"
import AboutUs from "../components/aboutUs/AboutUs"
import Services from "../components/services/Services"
import Contact from "../components/contact/Contact"
import Experience from "../components/experience/Experience"
import Footer from "../components/footer/Footer.jsx"

function App() {
  return (
    <div>
      {/* Skip to content — visible on focus for keyboard users */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-iris focus:text-plume-0 focus:rounded-sharp focus:font-semibold focus:outline-none"
      >
        Saltar al contenido principal
      </a>
      <NavBar />
      <Hero/>
      <Services/>
      <Experience/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
