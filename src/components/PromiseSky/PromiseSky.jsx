import './PromiseSky.css'
import Star from './Star.jsx'

function PromiseSky() {
  return (
    <section className="promise-sky">
      <div className="section-header">
        <h2>Promise sky</h2>
        <p>Our wishes drift softly across the night.</p>
      </div>
      <div className="promise-sky__stars">
        <Star />
        <Star />
        <Star />
      </div>
    </section>
  )
}

export default PromiseSky
