import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">Romantic Site</div>
      <nav className="navbar__nav">
        <a href="#hero">Home</a>
        <a href="#letters">Letters</a>
        <a href="#gallery">Gallery</a>
        <a href="#playlist">Playlist</a>
      </nav>
    </header>
  )
}

export default Navbar
