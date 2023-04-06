import { useState } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

// import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    // const { id } = product;
        
    // const [quantity, setQuantity] = useState(1);
    // const dispatch = useDispatch();
    const addItemToCart = () => {
        // dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
    const [amount, setamount] = useState('');
    const buyNow = (e)=>{
        e.preventDefault();
        // if(amount === ""){
        // alert("please enter amount");
        // }else{
          var options = {
            key: "rzp_test_L0OE3OK4mfOEtJ",
            key_secret:"w4qnWCdwJRcRaC1Dp8QSMMVw",
            amount: 500,
            currency:"INR",
            name:"STARTUP_PROJECTS",
            description:"for testing purpose",
            handler: function(response){
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name:"Velmurugan",
              email:"mvel1620r@gmail.com",
              contact:"7904425033"
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();
        }
    //   }

   
    return (
        // <LeftContainer>
        //     <Image src={product.detailUrl} /><br />
        //     <StyledButton onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
        //     <StyledButton onClick={() => buyNow()} style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>

        // </LeftContainer>
        <LeftContainer>
            {/* <Image src={product.detailUrl} /><br /> */}
            <Image src='https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TASVADY227141_900x.jpg?v=1656152840' /><br />
            
            <StyledButton onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton onClick={buyNow} style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
            
        </LeftContainer>
    )
}

export default ActionItem;

// import React from 'react'

// const ActionItem = () => {
//   return (
//     <div>
//       This is action
//     </div>
//   )
// }

// export default ActionItem
