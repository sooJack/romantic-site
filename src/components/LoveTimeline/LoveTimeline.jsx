import './LoveTimeline.css'
import { timeline } from '../../data/timeline.js'

function LoveTimeline() {
  return (
    <section className="love-timeline">
      <div className="section-header">
        <h2>Timeline</h2>
        <p>Milestones from our journey together.</p>
      </div>
      <div className="timeline-list">
        {timeline.map((item) => (
          <div key={item.id} className="timeline-item">
            <strong>{item.year}</strong>
            <p>{item.event}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LoveTimeline
