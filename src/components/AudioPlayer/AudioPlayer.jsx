import './AudioPlayer.css'

function AudioPlayer() {
  return (
    <div className="audio-player">
      <p>Play the song while exploring our story.</p>
      <audio controls src="/music/our-song.mp3" />
    </div>
  )
}

export default AudioPlayer
