import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

import './Login.css'
export default function Login() {
   
  return (
    <div className='logintab' >
        <div className="log_in">
            <p className='nc'>New Customer?</p>
            <p className='su'>Sign Up</p>
            
        </div>
        <div className="log_in">
            <AccountCircleIcon/>
            <p>My Profile</p>
        </div>
        
        

      
    </div>
  )
}
