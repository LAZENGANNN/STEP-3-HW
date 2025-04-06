import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdBlock from './components/AdBlock/AdBlock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AdBlock></AdBlock>
  )
}

export default App
