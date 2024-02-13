import About from "./components/About"
import DiatPlanCard from "./components/DiatPlanCard"
import DiatPlanContainer from "./components/DiatPlanContainer"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <About />
      <DiatPlanContainer />
    </div>
  )
}

export default App
