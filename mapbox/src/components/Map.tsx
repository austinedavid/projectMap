import React from 'react'
import MapGl, {Marker, Popup} from "react-map-gl"
import "../styles/Map.css"
import 'mapbox-gl/dist/mapbox-gl.css';




const API_KEY = "pk.eyJ1IjoiYXVzdGluZWRhdmlkMSIsImEiOiJjbGZpYWRudm0xb2gzM3NuejNrNGNkOGVzIn0.qBHQgXC8t_U9rtfiG9laqQ"
const Map = () => {
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
    </div>
  )
}

export default Map