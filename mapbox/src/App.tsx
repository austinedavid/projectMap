import { useState } from 'react'
import './App.css'
import Map from './components/Map'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Icity} from "./assets/Cities"

export interface Iviews{
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  zoom: number;
}
function App() {
  const[open, setopen] = useState<boolean>(false)
  const[ourView, setourview] = useState<Iviews>({
    id:1,
    name: "enugu",
    longitude: 8.6775 ,
    latitude: 9.0778,
    zoom: 10
})
  return (
    <div className="App">
      <Navbar open={open} setopen={setopen}/>
      <div className='down-container'>
        <Sidebar open={open}/>
        <Map ourView={ourView} setourview={setourview}/>
      </div>
    </div>
  )
}

export default App
