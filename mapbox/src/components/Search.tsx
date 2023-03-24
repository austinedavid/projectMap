import React, {useState} from 'react'
import "../styles/Search.css"
import SearchIcon from '@mui/icons-material/Search';
import {Icity} from "../assets/Cities"
import {Iviews} from "../App"
interface Isearch{
    searchInput:string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    filtered: Icity[];
    openDiv:boolean;
    setourview: React.Dispatch<React.SetStateAction<Iviews>>
}
const Search = ({searchInput,setInput, filtered, openDiv, setourview}:Isearch) => {

    // creating a function to handle input chnages
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
    }
    // creating a function to handle city change
    const handleCityChange = (item:Icity)=>{
        setourview({
            id:item.id,
            name: item.name,
            longitude: item.long,
            latitude: item.lat,
            zoom: item.zoom
        })
        setInput(item.name)
    }
  return (
    <div className='input-con'>
        <div className='input-sub-con'>
            <div className='search-icon'>
            <SearchIcon/>
            </div>
            <input value={searchInput} className='input' placeholder='search for cities ...' onChange={(e)=>handleInput(e)}/>
            <div className='search-word'><p>search</p></div>
        </div>
        {
            openDiv && (
                <div className='filtered-div'>
                    {
                        filtered.map((item:Icity)=>(
                            <p className='filtered-p' key={item.id} onClick={()=>handleCityChange(item)}>{item.name}</p>
                        ))
                    }
                </div>
            )
        }
        
    </div>
  )
}

export default Search