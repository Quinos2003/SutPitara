import { useState, useEffect } from "react";

import { Box, Divider, Typography, styled } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  borderbottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
`;

const Heading = styled(Typography)`
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #878787;
  width: calc(100% - 26px);
  text-transform: uppercase;
  // white-space: nowrap;
`;

const Container = styled(Box)`
  // padding: 15px 24px;
  background: #fff;

`;

const Para=styled(Typography)`
font-size: 14px;
    padding: 12px 5px 12px 66px;
    cursor: pointer;

`
const Price = styled(Typography)`
float: right;
padding: 0 20px 0 5px;
    color: #388e3c;
    font-weight: 500;
`;

// component: {
//     // width: '30%'
// },

const Component = styled(Box)`
  background: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border: 2px solid #e0e0e0;
  border-radius: 2px;
`;
const LeftPart = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    // cartItems.map(item => {
    //     price += item.price.mrp
    //     discount += (item.price.mrp - item.price.cost)
    // })
    setPrice(price);
    setDiscount(discount);
  };

  return (
    <Component>
      {" "}
      {/* className={classes.component}> */}
      <Header>
        <StoreIcon style={{ color: "#830304" }} />
        <Heading style={{cursor:"pointer"}}>My Orders</Heading>
        <KeyboardArrowRightIcon style={{float: 'right', color:"#878787",cursor:'pointer'}}/>
      </Header>
      <Divider/>
      <Box>
      <Container>
        <Header>
          <PersonIcon style={{ color: "#830304" }} />
          <Heading>Account Settings</Heading>
        </Header>
        <Para>Profile Information</Para>
        <Para>Manage Addresses</Para>
        <Para>PAN Card Information</Para>
      </Container>
      <Container>
        <Header>
          <AccountBalanceWalletIcon style={{ color: "#830304" }} />
          <Heading> Payments</Heading>
        </Header>
        <Para>Gift Cards<Price component="span">₹{price}</Price></Para>
        <Para>Saved UPI</Para>
        <Para>Saved Cards</Para>
      </Container>
      <Container>
        <Header>
          <FolderSharedIcon style={{ color: "#830304" }} />
          <Heading>My Stuff</Heading>
        </Header>
        <Para>My Coupons</Para>
        <Para>My Reviews & Ratings</Para>
        <Para>All Notifications</Para> 
        <Para>My Wishlist</Para> 
      </Container>
      </Box>
      <Divider />
      <Header>
        <LogoutIcon style={{ color: "#830304" }} />
        <Heading style={{cursor:"pointer"}}>Logout</Heading>
      </Header>
    </Component>
    
  );
};

export default LeftPart;
