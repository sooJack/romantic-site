import './Gallery.css'
import { gallery } from '../../data/gallery.js'

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery__header">
        <h2>Our gallery</h2>
        <p>Some of our favorite moments in pictures.</p>
      </div>
      <div className="gallery__grid">
        {gallery.map((photo) => (
          <img
            key={photo.id}
            src={photo.image}
            alt={photo.alt}
            className="gallery__image"
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery
