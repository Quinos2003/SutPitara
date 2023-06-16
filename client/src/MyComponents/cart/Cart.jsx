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
import styled from "styled-components";
import CartItem from "./CartItem";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// const LeftComponent = styled(Grid)(({ theme }) => ({
//   paddingRight: 15,
//   [theme.breakpoints.down("sm")]: {
//     marginBottom: 15,
//   },
// }));

// const Header = styled(Box)`
//   padding: 15px 24px;
//   background: #fff;
//   box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
//   border: 2px solid #e0e0e0;
// `;

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

const Cart = () => {
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



  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  // Callback function to update total amount
  const updateTotalAmount = (amount) => {
    setTotalAmount(amount);
  };

  //to keep total count of elements shown in header
  const updateTotalItems = (items) => {
    setTotalItems(items);
  };

  // const buyNow = (e) => {
  //   e.preventDefault();
  //   // if(amount === ""){
  //   // alert("please enter amount");
  //   // }else{
  //   var options = {
  //     key: "rzp_test_L0OE3OK4mfOEtJ",
  //     key_secret: "w4qnWCdwJRcRaC1Dp8QSMMVw",
  //     amount: 500,
  //     currency: "INR",
  //     name: "STARTUP_PROJECTS",
  //     description: "for testing purpose",
  //     handler: function (response) {
  //       alert(response.razorpay_payment_id);
  //     },
  //     prefill: {
  //       name: "Velmurugan",
  //       email: "mvel1620r@gmail.com",
  //       contact: "7904425033",
  //     },
  //     notes: {
  //       address: "Razorpay Corporate office",
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };
  //   var pay = new window.Razorpay(options);
  //   pay.open();
  // };
  //   // }

  /*Added new cart configuration*/
  const navigate = useNavigate();

  const buyNow = () => {
    // dispatch(addToCart(id, quantity));
    navigate('/detail');
  }

  return (
    <Container>
      <Box>
        <LeftSection>
          <Header>
            <h3>Shopping Cart</h3>
            <h3 style={{color:"grey"}}> {totalItems} Items</h3>
          </Header>

          <CartContainer>
            <CartItem updateTotalAmount={updateTotalAmount} updateTotalItems={updateTotalItems}/>
          </CartContainer>
        </LeftSection>
        <RightSection>
          <Header>
            <h3>Order Summary</h3>
          </Header>
          <Summary>
            <Details>
              <p>Subtotal</p>
              <p>₹ 1,000</p>
            </Details>
            <Details>
              <p>Shipping</p>
              <p>₹ 40</p>
            </Details>
            <Details>
              <p>Discount</p>
              <p>₹ 0</p>
            </Details>
            <Details style={{borderTop:"1px solid #e0e0e0", fontWeight:"500"}}>
              <p>Total</p>
              <p>{totalAmount}</p>
            </Details>
          </Summary>
          <CheckOutButton onClick={() => buyNow()}>
            Place Order
          </CheckOutButton>
        </RightSection>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  height: 90vh;
`
  const Box = styled.div`
  display: flex;
  justify-content: center;
  gap:1.5rem;
  margin-top:2rem;
`
const Header = styled.div`
  display: flex;
  border-bottom: 3px solid #e0e0e0;
  justify-content: space-between;
  padding:0.5rem 1rem;
  font-weight: 700;
  font-size: 1.3rem;
`
const LeftSection = styled.div`
  border: 2px solid #e0e0e0;
  padding:1rem;
  width:50%;
`
const CartContainer = styled.div`
  height:70vh;
  overflow: auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #F4F4F4;
    border-radius: 100px;
    &:hover{
      background: #E7E7E7;
    }
  }

`

const RightSection = styled.div`
  height:60%;
  padding:1rem 1rem;
  padding-bottom: 2rem;
  background-color: #F7F7F7;

`
const Summary = styled.div`
  padding:1rem
`
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  gap:6rem;
`
const CheckOutButton = styled.div`
  border: 1px solid #e0e0e0;
  text-align: center;
  padding:1rem;
  background-color: #FF6C0F;
  color: white;
  cursor: pointer;
    &:hover{
      background-color: #B64701;
      transition: 0.25s;
    }
`
export default Cart;
