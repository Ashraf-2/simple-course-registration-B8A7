import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#F3F3F3] py-5 px-8">
      <Home></Home>
      
      {/* daisy ui button */}
      {/* <button class="btn btn-neutral">Neutral</button> */}

    </div>
  )
}

export default App
