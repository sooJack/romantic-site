import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function LetterCard({ letter, onOpen }) {
  return (
    <motion.div
      className="letter-card"
      whileHover={{
        scale: 1.05,
        rotate: 1
      }}
      whileTap={{
        scale: 0.95
      }}
      onClick={() => onOpen(letter)}
    >
      <SlEnvolopeLetter className="letter-icon" />

      <h3>{letter.title}</h3>

      <button>
        Abrir Carta
      </button>
    </motion.div>
  );
}
