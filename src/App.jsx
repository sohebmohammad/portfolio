import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import ChatWidget from './components/ChatWidget'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-300">
      <Header />
      <main>
        <Hero />
        <Reveal><Experience /></Reveal>
        <Reveal delay={60}><Projects /></Reveal>
        <Reveal delay={60}><TechStack /></Reveal>
        <Reveal delay={60}><CodingProfiles /></Reveal>
        <Reveal delay={60}><Contact /></Reveal>
      </main>
      <Footer />
      {/* <ChatWidget /> */}
    </div>
  )
}

export default App
