import { motion } from "framer-motion"
import { FaLock, FaUnlock, FaTrash } from "react-icons/fa"
import { SiTinyletter } from "react-icons/si";

export default function CapsuleCard({ capsule, remove }) {
  const now = Date.now()
  const unlocked = now >= capsule.openDate

  return (
    <motion.div
      className="capsule-card"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      {unlocked ? (
        <FaUnlock className="capsule-icon" />
      ) : (
        <FaLock className="capsule-icon" />
      )}

      <h3>
        {unlocked ? <SiTinyletter /> : "Cápsula Bloqueada"}
      </h3>

      {unlocked ? (
        <p className="message">{capsule.message}</p>
      ) : (
        <p>
          Abrir em:
          <br />
          <strong>
            {new Date(capsule.openDate).toLocaleString()}
          </strong>
        </p>
      )}

      <button
        className="delete-capsule"
        onClick={() => remove(capsule.id)}
      >
        <FaTrash />
      </button>
    </motion.div>
  )
}
