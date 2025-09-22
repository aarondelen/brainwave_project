import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Hero />
        <Benefits/>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
