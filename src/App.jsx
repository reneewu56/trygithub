import { useState } from 'react'
import home from './screens/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <home />
    </>
  )
}

export default App
