import React from 'react'
import '../styles/Sidebar.css'
import {cities, Icity} from "../assets/Cities"

// creating interface for our sidebar props
interface Iprops{
  open: boolean
}
const Sidebar = ({open}:Iprops) => {
  return (
   
    <div className={open? "sidebar-close": "sidebar-con"}>
      {
        cities.map((city:Icity)=>(
          <div key={city.id} className="city-div">
            <p>{city.name}</p>
          </div>
        ))
      }
    </div>
   
  )
}

export default Sidebar