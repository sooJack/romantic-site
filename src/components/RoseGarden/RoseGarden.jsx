import { motion } from "framer-motion";
import {
  FaSeedling,
  FaTrash
} from "react-icons/fa";

import useLocalStorage from "../../hooks/useLocalStorage";
import Rose from "./Rose";
import { GiRose } from "react-icons/gi";
import { GiShutRose } from "react-icons/gi";
import { GiBud } from "react-icons/gi";
import './RoseGarden.css';

export default function RoseGarden() {
  const [roses, setRoses] = useLocalStorage("love-garden", []);

  const plantRose = () => {
    const newRose = {
      id: Date.now(),
      date: new Date().toLocaleDateString()
    };
    setRoses([...roses, newRose]);
  };

  const clearGarden = () => {
    setRoses([]);
  };

  return (
    <section className="garden">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <GiRose /> Nosso Jardim
      </motion.h2>

      <p className="garden-text">
        Cada rosa representa um momento nosso ❤️
      </p>

      <div className="garden-info">
        <span style={{fontSize: '1.5rem'}}><GiRose /></span>
        <h3>{roses.length} rosas plantadas</h3>
      </div>

      <div className="roses-area">
        {roses.length === 0 ? (
          <div className="empty">
            <GiShutRose />
            <p>Nosso jardim está vazio...</p>
          </div>
        ) : (
          roses.map((rose, index) => (
            <Rose key={rose.id} index={index} />
          ))
        )}
      </div>

      <div className="garden-buttons">
        <button onClick={plantRose}>
          <GiBud /> Plantar Rosa
        </button>

        <button className="delete" onClick={clearGarden}>
          <FaTrash /> Limpar
        </button>
      </div>
    </section>
  );
}

