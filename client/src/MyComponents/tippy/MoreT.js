import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import StoreIcon from '@mui/icons-material/Store';
import './MoreT.css'
import { Link } from 'react-router-dom';
// import { Monitor } from '@mui/icons-material';
export default function MoreT() {
  return (
    <div className='moret'>
      <Link to='/orders'  style={{
            textDecoration: "none",
          }}>
        <div className="moret__in">
          <StoreIcon />
          <p>Orders</p>
        </div>
      </Link>
      <div className="moret__in">
        <NotificationsIcon />
        <p>Notification Preferences</p>

      </div>



    </div>
  )
}
