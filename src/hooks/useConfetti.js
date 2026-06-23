import { useEffect } from 'react'

export function useConfetti(active) {
  useEffect(() => {
    if (!active) return

    const timeout = setTimeout(() => {
      const confetti = document.createElement('div')
      confetti.textContent = '✨'
      confetti.style.position = 'fixed'
      confetti.style.top = '10%'
      confetti.style.left = '50%'
      confetti.style.transform = 'translateX(-50%)'
      document.body.appendChild(confetti)
      setTimeout(() => document.body.removeChild(confetti), 1200)
    }, 400)

    return () => clearTimeout(timeout)
  }, [active])
}
