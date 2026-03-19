import { Navbar } from './navbar'
import Hero from './hero'
import Services from './services'
import Ofertas from './ofertas'
import Contact from './contact'
import Footer from './footer'
import WhatsAppButton from './whatsapp-button'

function App() {

  return (
    <>
      <Navbar />
      <main className=''>
        <Hero />
        <Services />
        <Ofertas />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
