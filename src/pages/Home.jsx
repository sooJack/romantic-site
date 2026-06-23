import Navbar from '../components/Navbar/Navbar.jsx'
import Hero from '../components/Hero/Hero.jsx'
import LoveLetters from '../components/LoveLetters/LoveLetters.jsx'
import Gallery from '../components/Gallery/Gallery.jsx'
import RelationshipCounter from '../components/RelationshipCounter/RelationshipCounter.jsx'
import LoveReasons from '../components/LoveReasons/LoveReasons.jsx'
import RoseGarden from '../components/RoseGarden/RoseGarden.jsx'
import PromiseSky from '../components/PromiseSky/PromiseSky.jsx'
import TimeCapsule from '../components/TimeCapsule/TimeCapsule.jsx'
import Playlist from '../components/Playlist/Playlist.jsx'
import LoveTimeline from '../components/LoveTimeline/LoveTimeline.jsx'
import Footer from '../components/Footer/Footer.jsx'

function Home() {
  return (
    <div className="app-layout">
      <Navbar />
      <Hero />
      <main>
        <RelationshipCounter />
        <LoveReasons />
        <LoveLetters />
        <Gallery />
        <RoseGarden />
        <PromiseSky />
        <TimeCapsule />
        <Playlist />
        <LoveTimeline />
      </main>
      <Footer />
    </div>
  )
}

export default Home
