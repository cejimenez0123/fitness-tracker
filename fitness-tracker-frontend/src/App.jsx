import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Homepage from './Homepage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <h1 className="text-3xl text-center font-bold underline">
      Hello world!
    </h1>
    <Homepage/>
    </>
  )
}

export default App
