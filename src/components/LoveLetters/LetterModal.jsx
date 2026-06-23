import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function LetterModal({ selected, close }) {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{
              scale: 0.7,
              opacity: 0,
              y: 50
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0
            }}
            exit={{
              scale: 0.7,
              opacity: 0
            }}
            transition={{
              duration: 0.3
            }}
          >
            <button
              className="close-btn"
              onClick={close}
            >
              <FaTimes />
            </button>

            <h2>{selected.title}</h2>

            <p>{selected.content}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
