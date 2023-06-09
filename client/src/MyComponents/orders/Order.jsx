// import { Box, Grid, Typography, styled } from "@mui/material";
// import React from "react";
// import ImageDesc from "./ImageDesc";
// import Price from "./Price";
// import DeliveryDate from "./DeliveryDate";

// const Container=styled(Box)`
// padding: 30px 135px;
// `

// const Component = styled(Grid)(({ theme }) => ({
  
//   display: "flex",
//   width: "100%",
//   border: "2px solid #e0e0e0",
//   [theme.breakpoints.down("sm")]: {
//     padding: "15px 0",
//   },
// }));

// const Order = () => {
//   return (
//     <div>
//       <Container>
//         <Component container>
//         <Grid item lg={6} md={6} sm={6} xs={6}>
//           <ImageDesc />
//         </Grid>
//         <Grid item lg={2} md={2} sm={2} xs={2}>
//           <Price />
//         </Grid>
//         <Grid item lg={4} md={4} sm={4} xs={4}>
//           <DeliveryDate />
//         </Grid>
//         </Component>
//       </Container>
//     </div>
//   );

// };

// export default Order;

import { Box,styled } from '@mui/system'
import React from 'react'
import OrderItem from './OrderItem'

const Container = styled(Box)(({ theme }) => ({
  
  padding: '30px 135px',
    [theme.breakpoints.down("md")]: {
    padding: "30px 40px",
  },
}));

const Order = () => {
  return (
    <div>
      
      <Container>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>

      </Container>
    </div>
  )
}

export default Order
