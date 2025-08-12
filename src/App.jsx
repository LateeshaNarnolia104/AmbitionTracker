import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Homepage'
import Timer from './Components/Timer'
import Journal from './Components/Journal'
import Todos from './Components/Todos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div
      className="min-h-screen bg-[#051F45] bg-center bg-no-repeat bg-contain"
      style={{ backgroundImage: "url('bgimageforbp.png')" }}
    >
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
    </div>
    

    </>
  )
}

export default App
