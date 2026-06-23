import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Intro from './components/Intro/Intro'
import PasswordScreen from './components/PasswordScreen/PasswordScreen'
import LoveLetters from './components/LoveLetters/LoveLetters'
import RoseGarden from './components/RoseGarden/RoseGarden'
import RelationshipCounter from './components/RelationshipCounter/RelationshipCounter'
import TimeCapsule from './components/TimeCapsule/TimeCapsule'

function App() {
  const [stage, setStage] = useState('intro')

  const handleIntroComplete = () => {
    setStage('password')
  }

  const handleUnlock = () => {
    setStage('content')
  }

  return (
    <AnimatePresence mode="wait">
      {stage === 'intro' && (
        <Intro key="intro" onIntroComplete={handleIntroComplete} />
      )}
      {stage === 'password' && (
        <PasswordScreen key="password" onUnlock={handleUnlock} />
      )}
      {stage === 'content' && (
        <div key="content">
          <RelationshipCounter />
          <LoveLetters />
          <RoseGarden />
          <TimeCapsule />
        </div>
      )}
    </AnimatePresence>
  )
}

export default App
