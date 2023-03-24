import React, {useState, useEffect} from 'react'
import MapGl, {Marker, Popup} from "react-map-gl"
import "../styles/Map.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import Search from './Search';
import {cities, Icity} from "../assets/Cities"
import{Iviews} from '../App'
import axios from "axios"




const API_KEY = "pk.eyJ1IjoiYXVzdGluZWRhdmlkMSIsImEiOiJjbGZpYWRudm0xb2gzM3NuejNrNGNkOGVzIn0.qBHQgXC8t_U9rtfiG9laqQ"

interface Imaps{
    ourView: Iviews;
    setourview: React.Dispatch<React.SetStateAction<Iviews>>
}
const Map = ({ourView, setourview}:Imaps) => {
    const[openDiv, setopenDiv] = useState<boolean>(false)
    const[searchInput, setInput] = useState<string>("")
    const[filtered, setfiltered] = useState<Icity[]>([])
    const[weather, setweather] = useState([])
    console.log(filtered)
    console.log(openDiv)
    // this use eefect is for filtering when there is change in the input
    // add also to open up the divs
    useEffect(()=>{
        if(searchInput){
            setopenDiv(true)
            const filter = cities.filter((city:Icity)=>city.name.toLowerCase().includes(searchInput.toLowerCase()))
            setfiltered(filter)
        }else{
            setopenDiv(false)
        }
    },[searchInput])

    // handle filtered when clicked
    // const handlefiltered = (city)=>{
    //     setInput(city.name)
      
    // }
  return (
    <div className='map-container'>
      <MapGl
         mapboxAccessToken={API_KEY}
         initialViewState={{
          longitude: 7.548949,
          latitude: 6.459964,
          zoom: 10
        }}
         style={{width: "100%", height: "100%"}}
         mapStyle = "mapbox://styles/austinedavid1/clfj5diqm002x01pcfhi59coh"
         
         attributionControl={true}
         doubleClickZoom={true}
      >

      </MapGl>
      <Search searchInput={searchInput} setInput={setInput} openDiv={openDiv} filtered={filtered} />
    </div>
  )
}

export default Map