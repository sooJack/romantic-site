import { useState } from "react"
import { motion } from "framer-motion"
import { FaGift, FaLock, FaUnlock } from "react-icons/fa"

import useLocalStorage from "../../hooks/useLocalStorage"
import CapsuleCard from "./CapsuleCard"
import { TfiGift } from "react-icons/tfi";

import "./TimeCapsule.css"

export default function TimeCapsule() {
  const [capsules, setCapsules] = useLocalStorage("love-capsules", [])
  const [message, setMessage] = useState("")
  const [date, setDate] = useState("")

  function createCapsule() {
    if (!message || !date) return

    const capsule = {
      id: Date.now(),
      message,
      openDate: new Date(date).getTime(),
      created: new Date().toLocaleDateString()
    }

    setCapsules([...capsules, capsule])
    setMessage("")
    setDate("")
  }

  function removeCapsule(id) {
    setCapsules(capsules.filter(c => c.id !== id))
  }

  return (
    <section className="capsule-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <TfiGift /> Cápsulas do Tempo
      </motion.h2>

      <p>Mensagens para o nosso futuro ❤️</p>

      <div className="capsule-create">
        <textarea
          placeholder="Escreva uma mensagem..."
          value={message}
          onChange={e => setMessage(e.target.value)}
        />

        <input
          type="datetime-local"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <button onClick={createCapsule}>
          <FaGift />
          Guardar
        </button>
      </div>

      <div className="capsule-list">
        {capsules.length === 0 ? (
          <div className="empty-capsule">
            <FaLock />
            <p>Nenhuma cápsula criada</p>
          </div>
        ) : (
          capsules.map(capsule => (
            <CapsuleCard
              key={capsule.id}
              capsule={capsule}
              remove={removeCapsule}
            />
          ))
        )}
      </div>
    </section>
  )
}
