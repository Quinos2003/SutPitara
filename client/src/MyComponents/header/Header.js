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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { useEffect} from "react";



//  for the light mode use this import and in the tippy write the theme="light"
import "tippy.js/themes/light.css";
import { useState } from "react";
import LoginDialog from "../login/LoginDialog";
import Shopnow from "../tippy/Shopnow";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };

  


  return (
    <>
      <div className="header">
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
        <div className="space">
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
        <div className="header__fifth">
          <ShoppingCartIcon />

          <span>Cart</span>
        </div>
        <div className="header__sixth">
          <FavoriteBorderIcon />

          <span>Wishlist</span>
        </div>
        </div>
      </div>
      
      
      <LoginDialog open={open} setOpen={setOpen} />
    </>
  );
}
