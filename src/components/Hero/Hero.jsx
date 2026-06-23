import { useRef, useState } from 'react'
import './Hero.css'
import { VscDebugStart } from "react-icons/vsc";
import { CiPause1 } from "react-icons/ci";

function Hero() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        audio.currentTime = 0
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        console.error('Erro ao reproduzir a música:', error)
        setIsPlaying(false)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-player">
        <div className={`hero-disc ${isPlaying ? 'is-playing' : ''}`}>
          <img src="/images/vinil-laufey.png" alt="Capa da música" />
        </div>

        <button type="button" className="hero-player-button" onClick={togglePlayback}>
          {isPlaying ? <CiPause1 /> : <VscDebugStart />}
          <span>{isPlaying ? 'Pausar' : 'Tocar'}</span>
        </button>
      </div>

      <div className="hero-content">
        <span className="hero-subtitle">Nossa história de amor</span>
        <h1>Celebrando cada momento juntos</h1>
        <p>Do primeiro olhar à eternidade — esta página é o nosso jardim de memórias.</p>
      </div>

      <audio
        ref={audioRef}
        src="/music/our-song.mp3"
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </section>
  )
}

export default Hero
