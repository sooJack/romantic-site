import { useRef, useState } from 'react'
import { CiPause1 } from 'react-icons/ci'
import { VscDebugStart } from 'react-icons/vsc'
import './Playlist.css'

function Playlist() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const baseUrl = import.meta.env.BASE_URL

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        console.error('Erro ao reproduzir a música:', error)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section id="playlist" className="playlist">
      <div className="section-header">
        <h2>Our song</h2>
        <p>Play the melody that always brings us home.</p>
      </div>
      <div className="playlist-card">
        <div className="playlist-player">
          <div className="player-info">
            <p>Our romantic song is ready to play.</p>
            <span>“Our Song”</span>
          </div>

          <div className="player-visual">
            <div className={`player-disc ${isPlaying ? 'is-playing' : ''}`}>
              <img src={`${baseUrl}images/vinil-laufey.png`} alt="Capa da música" />
            </div>

            <button type="button" className="player-button" onClick={togglePlayback}>
              {isPlaying ? <CiPause1 /> : <VscDebugStart />}
            </button>
          </div>
        </div>

        <audio
          ref={audioRef}
          src={`${baseUrl}music/our-song.mp3`}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </section>
  )
}

export default Playlist
