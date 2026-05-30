import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0f1117] text-slate-300">
      <Header />
      <main>
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
