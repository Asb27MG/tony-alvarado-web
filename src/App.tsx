import { Biography } from './components/Biography'
import { Concerts } from './components/Concerts'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Multimedia } from './components/Multimedia'
import { Repertoire } from './components/Repertoire'
import { Testimonials } from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Biography />
        <Repertoire />
        <Concerts />
        <Multimedia />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
