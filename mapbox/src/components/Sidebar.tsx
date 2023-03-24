import React from 'react'
import '../styles/Sidebar.css'
import {cities, Icity} from "../assets/Cities"
import {Iviews} from "../App"

// creating interface for our sidebar props
interface Iprops{
  open: boolean;
  setourview: React.Dispatch<React.SetStateAction<Iviews>>;
  setopen: React.Dispatch<React.SetStateAction<boolean>>
}
const Sidebar = ({open, setourview, setopen}:Iprops) => {

    // created function to change ourview
    const handleCityChange = (city:Icity)=>{
        setourview({
            id:city.id,
            name: city.name,
            longitude: city.long,
            latitude: city.lat,
            zoom: city.zoom
        })

        setopen(false)
    }
  return (
   
    <div className={open? "sidebar-close": "sidebar-con"}>
      {
        cities.map((city:Icity)=>(
          <div key={city.id} className="city-div" onClick={()=>handleCityChange(city)}>
            <p>{city.name}</p>
          </div>
        ))
      }
    </div>
   
  )
}

export default Sidebar