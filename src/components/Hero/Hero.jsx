import { useEffect, useRef, useState } from 'react'
import { CiPause1 } from 'react-icons/ci'
import { IoVolumeMediumOutline } from 'react-icons/io5'
import { VscDebugStart } from 'react-icons/vsc'
import './Hero.css'

function Hero() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const baseUrl = import.meta.env.BASE_URL
  const assetVersion = '20260623-2'

  const [volume, setVolume] = useState(0.45)

  const fadeAudio = (targetVolume, duration = 300) => {
    const audio = audioRef.current
    if (!audio) return

    const startVolume = audio.volume
    const startTime = performance.now()

    const step = () => {
      const elapsed = performance.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      audio.volume = startVolume + (targetVolume - startVolume) * progress

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const startPlayback = async () => {
      try {
        audio.volume = 0
        await audio.play()
        fadeAudio(volume, 400)
        setIsPlaying(true)
      } catch (error) {
        console.error('Erro ao reproduzir a música:', error)
        setIsPlaying(false)
      }
    }

    startPlayback()
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        audio.volume = 0
        await audio.play()
        fadeAudio(volume, 400)
        setIsPlaying(true)
      } catch (error) {
        console.error('Erro ao reproduzir a música:', error)
        setIsPlaying(false)
      }
    } else {
      fadeAudio(0, 300)
      setTimeout(() => {
        audio.pause()
        audio.volume = volume
        setIsPlaying(false)
      }, 300)
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-player">
        <div className={`hero-disc ${isPlaying ? 'is-playing' : ''}`}>
          <img
            src={`${baseUrl}images/vinil-laufey.png?v=${assetVersion}`}
            alt="Capa da música"
          />
        </div>

        <button type="button" className="hero-player-button" onClick={togglePlayback}>
          {isPlaying ? <CiPause1 /> : <VscDebugStart />}
        </button>

        <div className="hero-volume-control">
          <IoVolumeMediumOutline />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(event) => {
              const nextVolume = Number(event.target.value)
              setVolume(nextVolume)
              const audio = audioRef.current
              if (audio) {
                audio.volume = nextVolume
              }
            }}
          />
        </div>
      </div>

      <div className="hero-content">
        <span className="hero-subtitle">Nossa história de amor</span>
        <h1>Celebrando cada momento juntos</h1>
        <p>Do primeiro olhar à eternidade — esta página é o nosso jardim de memórias.</p>
      </div>

      <audio
        ref={audioRef}
        src={`${baseUrl}music/our-song.mp3?v=${assetVersion}`}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </section>
  )
}

export default Hero
