import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { floating } from '../../animations/floating'
import './FloatingHearts.css'

export default function FloatingHearts() {
  const hearts = Array.from({ length: 20 })

  return (
    <div className="hearts" aria-hidden="true">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="heart"
          style={{ left: `${Math.random() * 100}%` }}
          animate={floating.animate}
          transition={{
            ...floating.transition,
            delay: i * 0.2
          }}
        >
          <FaHeart />
        </motion.div>
      ))}
    </div>
  )
}

