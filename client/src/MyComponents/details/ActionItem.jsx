import { useState } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

// import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 10px 0 80px',
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

// const FavButton=styled(FavoriteBorderIcon)`
// color: red;
// position: absolute;
// left: 105px;
// top: 172px;

// `
// const Main=styled('div')`
// cursor: pointer;
//     position: absolute;
//     left: 105px;
//     top: 172px;
//     border-radius: 50%;
    
//     border: 1px solid #f0f0f0;
//     box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);
    
//     background: #fff;
// }
// `
const Main = styled('div')(({ theme }) => ({
  cursor: 'pointer',
    position: 'absolute',
    left: '105px',
    top: '195px',
    borderRadius: '50%',
    
    border: '1px solid #f0f0f0',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,.1)',
    
    background: '#fff',
  // minWidth: '40%',
  // padding: '40px 10px 0 80px',
  [theme.breakpoints.down('md')]: {
      left: '65px',
      top: '175px',
  }
}))
const Heart=styled('div')`
position: relative;
display: inline-flex;
padding: 5px;
`

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    // const { id } = product;
        
    // const [quantity, setQuantity] = useState(1);
    // const dispatch = useDispatch();
    const addItemToCart = () => {
        // dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
    const  addItemToWishList = () => {
        // dispatch(addToCart(id, quantity));
        navigate('/wishlist');
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
            <Image src='https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TASVADY227141_900x.jpg?v=1656152840' />

            <Main className="_2h" onClick={() => addItemToWishList()}>
             <Heart className="_36FS">
             <FavoriteIcon style={{
              width: '15px',
              height: '15px',
              fill: 'rgb(40, 116, 240)',
             }}/>
             </Heart>
            
            </Main>
           
            <br />
           
            
            
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
