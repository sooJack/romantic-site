import './LoveReasons.css'
import { reasons } from '../../data/reasons.js'

function LoveReasons() {
  return (
    <section className="love-reasons">
      <div className="section-header">
        <h2>Reasons I love you</h2>
      </div>
      <div className="reasons-grid">
        {reasons.map((reason) => (
          <article key={reason.id} className="reason-card">
            <p>{reason.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LoveReasons
