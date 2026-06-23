import { useState } from "react";
import { motion } from "framer-motion";

import { letters } from "../../data/letters";

import LetterCard from "./LetterCard";
import LetterModal from "./LetterModal";
import { GiLoveLetter } from "react-icons/gi";
import './LoveLetters.css'

export default function LoveLetters() {
  const [selectedLetter, setSelectedLetter] =
    useState(null);

  return (
    <section className="letters-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <GiLoveLetter /> Cartas Para Você
      </motion.h2>

      <div className="letters-grid">
        {letters.map((letter) => (
          <LetterCard
            key={letter.id}
            letter={letter}
            onOpen={setSelectedLetter}
          />
        ))}
      </div>

      <LetterModal
        selected={selectedLetter}
        close={() => setSelectedLetter(null)}
      />
    </section>
  );
}
