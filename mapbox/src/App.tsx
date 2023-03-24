import { useState } from 'react'
import './App.css'
import Map from './components/Map'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const[open, setopen] = useState<boolean>(false)

  return (
    <div className="App">
      <Navbar open={open} setopen={setopen}/>
      <div className='down-container'>
        <Sidebar/>
        <Map/>
      </div>
    </div>
  )
}

export default App
