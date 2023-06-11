import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Link } from 'react-router-dom';
import './Login.css'
export default function Login() {
   
  return (
    <div className='logintab' >
        <div className="log_in">
            <p className='nc'>New Customer?</p>
            <p className='su'>Sign Up</p>
            
        </div>
        <Link to="/account" style={{
            textDecoration: "none",
          }}>
        <div className="log_in">
            <AccountCircleIcon/>
            <p style={{color:'#830304'}}>My Profile</p>
        </div>
        </Link>
        
        

      
    </div>
  )
}
