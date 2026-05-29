import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#13141a]">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
