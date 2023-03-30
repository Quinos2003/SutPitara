import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GetAppIcon from '@mui/icons-material/GetApp';
import StoreIcon from '@mui/icons-material/Store';
import './MoreT.css'
// import { Monitor } from '@mui/icons-material';
export default function MoreT() {
  return (
    <div className='moret'>

        <div className="moret__in">
            
            <StoreIcon/>
            <p>Orders</p>


        </div>
        <div className="moret__in">
            <NotificationsIcon/>
            <p>Notification Preferences</p>

        </div>
       
        
      
    </div>
  )
}
