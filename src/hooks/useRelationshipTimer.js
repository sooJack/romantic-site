import { useEffect, useState } from 'react'

export default function useRelationshipTimer(startDate) {
  const calculateTime = () => {
    const start = new Date(startDate)
    const now = new Date()
    const difference = now - start

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }

    const seconds = Math.floor(difference / 1000)
    const days = Math.floor(seconds / (3600 * 24))
    const hours = Math.floor((seconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    return {
      days,
      hours,
      minutes,
      seconds: secs
    }
  }

  const [time, setTime] = useState(calculateTime())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return time
}
