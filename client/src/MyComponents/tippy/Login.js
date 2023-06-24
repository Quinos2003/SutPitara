// import React,{useState} from 'react'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Link } from 'react-router-dom';
// import './Login.css';
// import LoginDialog from '../login/LoginDialog';

// export default function Login() {

//   const [openSignupDialog, setOpenSignupDialog] = useState(false);


//   return (
//     <div className='logintab' >
//         <div className="log_in">
//             <p className='nc'>New Customer?</p>
//             <button style={{border:"none",background:"none"}} className='su' onClick={() => setOpenSignupDialog(true)}>Sign Up</button>
            
//         </div>
//         <Link to="/account" style={{
//             textDecoration: "none",
//           }}>
//         <div className="log_in">
//             <AccountCircleIcon/>
//             <p style={{color:'#830304'}}>My Profile</p>
//         </div>
//         </Link>

//         {openSignupDialog && <LoginDialog open={openSignupDialog} setOpen={setOpenSignupDialog} />}    </div>
//   )
// }
