import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { GiFlowers } from "react-icons/gi";
import './Intro.css'

export default function Intro({ onIntroComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onIntroComplete()
    }, 4000)

    return () => clearTimeout(timer)
  }, [onIntroComplete])

  return (
    <motion.div
      className="intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="intro-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="intro-icon"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaHeart />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Presente para minha Baby girl
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <GiFlowers /> Algo especial te espera... <GiFlowers />
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
