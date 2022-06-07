import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Register } from './components/signup/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Register/>
    </div>
  )
}

export default App
