

import { useState, useEffect } from 'react';

import { styled, Box, Typography, Grid} from '@mui/material';

import ProductDetail from './ProductDetail';
// import ActionItem from './ActionItem';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';
// import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from './Breadcrumbs'

// import { getProductDetails } from '../../redux/actions/productActions';

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0,
       paddingTop: '30px'
        

    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding: 0px 20px ;
    & > p {
        margin-top: 10px;
    }

`;

// const DetailText=styled(Typography)`

// `

const DetailView = () => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    
    const { id } = useParams();

    // const { loading, product } = useSelector(state => state.getProductDetails);
    // const { loading, product } = useSelector(state => state.getProductDetails);

//     const dispatch = useDispatch();
    
//     useEffect(() => {
//         if(product && id !== product.id)   
//             dispatch(getProductDetails(id));
//     // }, [dispatch, product, id, loading]);
// }, [dispatch, product, id , loading]);
// console.log(product);

    return (    
        <Component>
            <Box style={{
                paddingLeft: '100px',
            }}>
                <Breadcrumbs/>
            </Box>
            {/* {   product && Object.keys(product).length && */}
                <Container container> 
                    <Grid item lg={4} md={4} sm={12} xs={12} >
                        {/* <ActionItem product={product} /> */}
                        <ActionItem  />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={12} xs={12}>
                        {/* <Typography>{product.title.longTitle}</Typography> */}
                        <Typography style={{ fontSize: '24px',
                    fontWeight: '500',
                    fontFamily:'serif'
                    }} >Pigeon Favourite Electric Kettle  (1.5 L, Silver, Black)</Typography>

                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            {/* <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span> */}
                        </Typography>
                        <Typography>
                            {/* <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;  */}
                            <span style={{ fontSize: 28 }}>₹625</span>&nbsp;&nbsp;&nbsp; 
                            {/* <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp; */}
                            <span style={{ color: '#878787' }}><strike>₹1125</strike></span>&nbsp;&nbsp;&nbsp;
                            {/* <span style={{ color: '#388E3C' }}>{product.price.discount} off</span> */}
                            <span style={{ color: '#388E3C' }}>47%off</span>
                        </Typography>
                        {/* <ProductDetail product={product} /> */}
                        <ProductDetail />
                    </RightContainer>
                </Container>
                   
            {/* }    */}
        </Component>
       
    )
}

export default DetailView;







