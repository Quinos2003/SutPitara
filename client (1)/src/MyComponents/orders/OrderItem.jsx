import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import ImageDesc from "./ImageDesc";
import Price from "./Price";
import DeliveryDate from "./DeliveryDate";



const Component = styled(Grid)(({ theme }) => ({
  
  display: "flex",
    marginTop:'20px',
  width: "100%",
  padding:"20px",
  border: "2px solid #e0e0e0",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const OrderItem = () => {
  return (
    <div>
      
        <Component container>
        <Grid item lg={6} md={8} sm={6} xs={6}>
          <ImageDesc />
        </Grid>
        <Grid item lg={2} md={1} sm={2} xs={2}>
          <Price />
        </Grid>
        <Grid item lg={4} md={3} sm={4} xs={4}>
          <DeliveryDate />
        </Grid>
        </Component>
      
    </div>
  );
};

export default OrderItem;
