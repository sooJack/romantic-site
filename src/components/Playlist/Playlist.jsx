import './Playlist.css'

function Playlist() {
  return (
    <section id="playlist" className="playlist">
      <div className="section-header">
        <h2>Our song</h2>
        <p>Play the melody that always brings us home.</p>
      </div>
      <div className="playlist-card">
        <p>Our romantic song is ready to play.</p>
        <audio controls src="/music/our-song.mp3">
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  )
}

export default Playlist
