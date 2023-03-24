import React, {useState} from 'react'
import "../styles/Search.css"
import SearchIcon from '@mui/icons-material/Search';
import {Icity} from "../assets/Cities"

interface Isearch{
    searchInput:string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    filtered: Icity[];
    openDiv:boolean
}
const Search = ({searchInput,setInput, filtered, openDiv }:Isearch) => {

    // creating a function to handle input chnages
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
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
                            <p className='filtered-p'>{item.name}</p>
                        ))
                    }
                </div>
            )
        }
        
    </div>
  )
}

export default Search