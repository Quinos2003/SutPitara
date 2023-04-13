// import { useEffect } from 'react';

// import { Box, Typography, Button, Grid, styled } from '@mui/material';
// import { useParams } from 'react-router-dom';

// import { useSelector, useDispatch } from 'react-redux';
// // import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

// import TotalView from './TotalView';
// import EmptyCart from './EmptyCart';
// import CartItem from './CartItem';

// // import { post } from '../../utils/paytm';
// // import { payUsingPaytm } from '../../service/api';

// const Component = styled(Grid)(({ theme }) => ({
//     padding: '30px 135px',
//     display: 'flex',
//     [theme.breakpoints.down('sm')]: {
//         padding: '15px 0'
//     }
// }));

// const LeftComponent = styled(Grid)(({ theme }) => ({
//     paddingRight: 15,
//     [theme.breakpoints.down('sm')]: {
//         marginBottom: 15
//     }
// }));

// const Header = styled(Box)`
//     padding: 15px 24px;
//     background: #fff;
// `;

// const BottomWrapper = styled(Box)`
//     padding: 16px 22px;
//     background: #fff;
//     box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
//     border-top: 1px solid #f0f0f0;
// `;

// const StyledButton = styled(Button)`
//     display: flex;
//     margin-left: auto;
//     background: #fb641b;
//     color: #fff;
//     border-radius: 2px;
//     width: 250px;
//     height: 51px;
// `;

// const Cart = () => {
//     const cartDetails = useSelector(state => state.cart);
//     // const { cartItems } = cartDetails;
//     // const { id } = useParams();

//     // const dispatch = useDispatch();

//     // useEffect(() => {
//     //     if(cartItems && id !== cartItems.id)
//     //         // dispatch(addToCart(id));
//     // }, [dispatch, cartItems, id]);

//     const removeItemFromCart = (id) => {
//         // dispatch(removeFromCart(id));
//     }

//     const buyNow = async () => {
//         // let response = await payUsingPaytm({ amount: 500, email: 'kunaltyagi@gmail.com'});
//         // var information = {
//         //     action: 'https://securegw-stage.paytm.in/order/process',
//         //     params: response
//         // }
//         // post(information);
//     }

//     return (
//         <>
//         {/* { cartItems.length ?  */}
//             <Component container>
//                 <LeftComponent item lg={9} md={9} sm={12} xs={12}>
//                     {/* <Header>
//                         <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
//                         <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart </Typography>
//                     </Header> */}
//                         {/* {   cartItems.map(item => (
//                                 <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
//                             ))
//                         } */}
//                     <BottomWrapper>
//                         <StyledButton onClick={() => buyNow()} variant="contained">Place Order</StyledButton>
//                     </BottomWrapper>
//                 </LeftComponent>
//                 <Grid item lg={3} md={3} sm={12} xs={12}>
//                     {/* <TotalView cartItems={cartItems} /> */}
//                 </Grid>
//             </Component> : <EmptyCart />
//         {/* } */}
//         </>

//     )
// }

// export default Cart;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import WishlistItem from './WishlistItem'
import { useState } from "react";
import { Box, Typography, Button, Grid, styled } from "@mui/material";
import TotalView from "./TotalView";
const Component = styled(Box)(({ theme }) => ({
  padding: "30px 135px",
  // display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));
const LeftComponent = styled(Grid)(({ theme }) => ({
  width: '100%',
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border: 2px solid #e0e0e0;
`;

// const BottomWrapper = styled(Box)`
//   padding: 16px 22px;
//   background: #fff;
//   box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
//   border-top: 1px solid #f0f0f0;
// `;

// const StyledButton = styled(Button)`
//   display: flex;
//   margin-left: auto;
//   background: #fb641b;
//   color: #fff;
//   border-radius: 2px;
//   width: 250px;
//   height: 51px;
// `;
const More=styled(Box)`
text-align: center;
color: rgb(40, 116, 240);
cursor: pointer;
padding: 15px 24px;
box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
border: 2px solid #e0e0e0;
`


const Wishlist = () => {
  // const cartDetails = useSelector(state => state.cart);
  // const { cartItems } = cartDetails;
  // const buyNow = async () => {
  //   // let response = await payUsingPaytm({ amount: 500, email: 'kunaltyagi@gmail.com'});
  //   // var information = {
  //   //     action: 'https://securegw-stage.paytm.in/order/process',
  //   //     params: response
  //   // }
  //   // post(information);
  // };
  const removeItemFromCart = (id) => {
    //         // dispatch(removeFromCart(id));
  };

  const [amount, setamount] = useState("");
  const buyNow = (e) => {
    e.preventDefault();
    // if(amount === ""){
    // alert("please enter amount");
    // }else{
    var options = {
      key: "rzp_test_L0OE3OK4mfOEtJ",
      key_secret: "w4qnWCdwJRcRaC1Dp8QSMMVw",
      amount: 500,
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Velmurugan",
        email: "mvel1620r@gmail.com",
        contact: "7904425033",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };
  //   }

  return (
    <div>
      <Component container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          <Header>
            {/* <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography> */}
            <Typography style={{ fontWeight: 600, fontSize: 18 }}>
              My Wishlist{" "}
            </Typography>
          </Header>
          {/* {   cartItems.map(item => (
                                 <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                           ))
                         } */}
          {/* <CartItem removeItemFromCart={removeItemFromCart} /> */}
          <WishlistItem removeItemFromCart={removeItemFromCart} />
          <WishlistItem removeItemFromCart={removeItemFromCart} />
          <WishlistItem removeItemFromCart={removeItemFromCart} />
          <WishlistItem removeItemFromCart={removeItemFromCart} />
          <More>
            <span > Load more items</span>
          </More>
          
        </LeftComponent>

        {/* right components */}
       
      </Component>
    </div>
  );
};

export default Wishlist;
