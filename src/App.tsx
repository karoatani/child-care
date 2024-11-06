import Nav from './components/Nav'
import Hero from './components/Hero'
import OurApproach from './components/OurApproach'
import CallToAction from './components/CallToAction'
import FamilyWelcomeMessage from './components/FamilyWelcomeMessage'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <div className='flex flex-col gap-52'>
      <div>
      <Nav/>
      <Hero/>
      </div>
      <OurApproach/>
      <CallToAction/>
      <FamilyWelcomeMessage/>
      <Contact/>
    </div>
      <Footer/>
    </>
  )
}

export default App