import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import './PasswordScreen.css'

export default function PasswordScreen({ onUnlock }) {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)
  const correctPassword = 'vivilette'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.toLowerCase() === correctPassword) {
      onUnlock()
      setPassword('')
      setError(false)
    } else {
      setError(true)
      setPassword('')
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <motion.div
      className="password-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="password-card"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lock-icon">
          <FaLock />
        </div>

        <h2>Este é um presente especial</h2>

        <div className="hint-box">
          <p>💡 <strong>Dica:</strong> Qual é o apelido mais fofo que eu já te dei?</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="password-input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite a resposta"
              className={error ? 'error' : ''}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <motion.button
            type="submit"
            className="unlock-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Desbloquear
          </motion.button>
        </form>

        {error && (
          <motion.p
            className="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ❌ Senha incorreta, tente novamente!
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  )
}
