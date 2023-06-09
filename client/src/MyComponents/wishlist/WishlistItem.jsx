import { Card, Box, Typography, Button, styled } from '@mui/material';

// import { addEllipsis } from '../../utils/util';
import GroupButton from './GroupButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from './Dialog';
import { useState } from 'react';


const Component = styled(Card)`
    // border-top: 1px solid #f0f0f0;
    border: 2px solid #e0e0e0;
    border-radius: 0px;
    display: flex;
    margin-top: 30px;
`;

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
    width: 25%;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

// const WishlistItem = ({ item, removeItemFromWishlist }) => {
const WishlistItem = ( ) => {


    const [dialog,setDialog]=useState({
    
        message: "",
        isLoading: false
    });
    const handleDialog = (message, isLoading, nameProduct) => {
        setDialog({
          message,
          isLoading,
          //Update
          nameProduct
        });
      };
    
    const removeItemFromWishlist=()=>{
        setDialog({
            message: 'Are you sure you want to delete?',
            isLoading: true
        })
    }
    const areUSureDelete = (choose) => {
        if (choose) {
        //   setProducts(products.filter((p) => p.id !== idProductRef.current));
          handleDialog("", false);
        } else {
          handleDialog("", false);
        }
      };
    
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';


    return (
        <>
        <Component>
            <LeftComponent>
                {/* <img src={item.url} style={{ height: 110, width: 110 }} /> */}
                <img src='https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TASVADY227141_900x.jpg?v=1656152840' style={{ height: 110, width: 110 }} />
                {/* <GroupButton /> */}
            </LeftComponent>
            <Box style={{ margin: 20, width: '50%', }}>
                {/* <Typography>{(item.title.longTitle)}</Typography> */}
                <Typography>Flipkart SmartBuy Sandwich 01 Grill  (Black)</Typography>
                
                <Typography style={{margin: '20px 0'}}>
                    {/* <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{item.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.price.discount} off</Discount> */}
                    <Cost component="span">₹625</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹1125</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">47% off</Discount>
                </Typography>
                {/* <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove> */}
               
               
            </Box>
            {/* <Remove onClick={() => removeItemFromCart()}>Remove</Remove> */}
            <Box style={{margin: 20, width: '25%',}}>
            <DeleteIcon style={{float: 'right', cursor: 'pointer'}} onClick={() => removeItemFromWishlist()}/>
              {dialog.isLoading && (
        <Dialog
          //Update
          nameProduct={dialog.nameProduct}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
            </Box>
          
        </Component>
        </>
    )
}

export default WishlistItem;