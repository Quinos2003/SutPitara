import { Card, Box, Typography, Button, styled } from '@mui/material';

// import { addEllipsis } from '../../utils/util';
// import GroupButton from './GroupButton';


const Component = styled(Box)`
    // border-top: 1px solid #f0f0f0;
    // border: 2px solid #e0e0e0;
    border-radius: 0px;
    display: flex;
`;

const LeftComponent = styled(Box)`
    // margin: 20px; 
    display: flex;
    flex-direction: column;
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
    margin-top: 47px;
    font-size: 16px;
`;

const ImageDesc = ({ item, removeItemFromCart }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    return (
        <>
        <Component>
            <LeftComponent>
                {/* <img src={item.url} style={{ height: 110, width: 110 }} /> */}
                <img src='https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TASVADY227141_900x.jpg?v=1656152840' style={{ height: 110, width: 110 }} />
              
            </LeftComponent>
            <Box style={{ marginLeft: '20px' }}>
                {/* <Typography>{(item.title.longTitle)}</Typography> */}
                <Typography>Flipkart SmartBuy Sandwich 01 Grill  (Black)</Typography>   
            </Box>
        </Component>
        </>
    )
}

export default ImageDesc;