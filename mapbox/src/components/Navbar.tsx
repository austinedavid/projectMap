import React from 'react'
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// created interface for the open and setopen props
interface Iprops{
  open:boolean;
  setopen: React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar = ({open, setopen}:Iprops) => {
  
  // here we set open and set it to true
  const handleOpen = ()=>{
    setopen(true)
  }
  // here we handle open and set it to false
  const handleClose = ()=>{
    setopen(false)
  }
  return (
    <div className='nav-container'>
      <div className='logo-div'><h4>MapBox</h4></div>
      <div className='menu-div'>
        {open? <div onClick={handleClose}><CloseIcon sx={{color:"white", fontSize:30, cursor: "pointer"}}/></div>:
          <div onClick={handleOpen}><MenuIcon sx={{color:"white", fontSize:30, cursor: "pointer"}}/></div>
        }
      </div>
    </div>
  )
}

export default Navbar