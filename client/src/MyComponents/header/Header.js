import React, { useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import MoreT from "../tippy/MoreT";
// import Login from "./Login";
import Login from "../tippy/Login";
import Logo from '../../image/Logo.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useEffect} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


//  for the light mode use this import and in the tippy write the theme="light"
import "tippy.js/themes/light.css";
import { useState } from "react";
import LoginDialog from "../login/LoginDialog";
import Shopnow from "../tippy/Shopnow";
import { Link } from "react-router-dom";
import MuiDrawer from "./MuiDrawer";
import { Box,styled } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const Drawer = styled(Box)(({ theme }) => ({
  
//  display: 'none',
display:'flex',
alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    
    display: 'none',
  },
}));

const Space = styled('div')(({ theme }) => ({
  //  display: 'none',
    [theme.breakpoints.down('md')]: {
      
      display: 'none',
    },
  }));

  const Navbar = styled('div')(({ theme }) => ({
    //  display: 'none',
      [theme.breakpoints.down('md')]: {
        
        justifyContent: 'space-between',
       
      },
    }));

export default function Header() {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  


  return (
    <>
      <Navbar className="header">
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <div className="header__first">
             {/* <img
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png
"
              alt="flipkart logo"
            />  */}
            <img src={Logo} alt="" />
            
          </div>
        </Link>
        <div className="header__second">
          <input type="text" name="" id="" placeholder="Search for products" />
          <SearchIcon />
        </div>
        <Space className="space">
        <div className="header__third">
          <Tippy
            content={<Login></Login>}
            //  visible={false}
            theme="light"
            interactive={true}
            offset={[5, 13]}
          >
            <button onClick={() => openDialog()}>Login</button>
          </Tippy>
        </div>
        <div className="header__third1">
        <Tippy
            content={<Shopnow></Shopnow>}
            theme="light"
            interactive={true}
            // visible={true}
            offset={[5, 18]}
          >
          <span>Shop Now</span>
          </Tippy>
        </div>
        <div className="header__fourth">
          <Tippy
            content={<MoreT></MoreT>}
            theme="light"
            interactive={true}
            offset={[5, 18]}
          >
            <span>More</span>
          </Tippy>
          <ExpandMoreIcon />
        </div>
        <Link to='/cart' style={{
            textDecoration: "none",
          }}>
        <div className="header__fifth" >
          {/* <ShoppingCartIcon /> */}

          <span>Cart</span>
        </div>
        </Link>
        <Link to='/wishlist' style={{
            textDecoration: "none",
          }}>
        <div className="header__sixth">
          {/* <FavoriteIcon /> */}

          <span>Wishlist</span>
        </div>
        </Link>
        </Space>
        <Drawer>

        <ShoppingCartOutlinedIcon style={{color: 'white'}}/>
   

        <MuiDrawer />
        </Drawer>
      </Navbar>
      
      
      
      <LoginDialog open={open} setOpen={setOpen} />
    </>
  );
}
