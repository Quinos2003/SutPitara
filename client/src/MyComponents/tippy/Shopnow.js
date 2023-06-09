import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GetAppIcon from '@mui/icons-material/GetApp';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import './Shopnow.css'
import { Link } from 'react-router-dom';


// import { Monitor } from '@mui/icons-material';
export default function Shopnow() {
  return (
    <div className='moret'>
      <Link to="/men" style={{
            textDecoration: "none",
          }}>
        <div className="moret__in">
            <ManIcon/>
            <p>For Men</p>

        </div>
        </Link>
        <Link to="/women" style={{
            textDecoration: "none",
          }}>
        <div className="moret__in">
            <WomanIcon/>
            <p>For Women</p>
        </div>
       
        </Link>
        
      
    </div>
  )
}
