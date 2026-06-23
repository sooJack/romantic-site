import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

import useRelationshipTimer from '../../hooks/useRelationshipTimer'
import { relationshipStart } from '../../data/relationship'

import './RelationshipCounter.css'

export default function RelationshipCounter() {
  const { days, hours, minutes, seconds } = useRelationshipTimer(relationshipStart)

  const boxes = [
    { label: 'Dias', value: days },
    { label: 'Horas', value: hours },
    { label: 'Minutos', value: minutes },
    { label: 'Segundos', value: seconds }
  ]

  return (
    <section className="counter-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <FaHeart /> Nosso Tempo
      </motion.h2>

      <p>Juntos construindo nossa história</p>

      <div className="counter-grid">
        {boxes.map((item, index) => (
          <motion.div
            key={item.label}
            className="time-box"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{String(item.value).padStart(2, '0')}</h3>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
