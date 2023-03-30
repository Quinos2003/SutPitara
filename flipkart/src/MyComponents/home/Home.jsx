import React from "react";
import NavBar from "./NavBar";
// import { useEffect } from "react";
import Banner from "./Banner";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";
import {useDispatch, useSelector} from'react-redux'
// import MidSlide from "./MidSlide";
import { useEffect } from "react";
import {getProducts } from '../../redux/actions/productActions'

const Component = styled(Box)`
  padding: 10px;
  background: #f7ede1;
  // background: red;
`;

// export default function Home() {
  
const  Home =() => {

   const {products} =useSelector(state => state.getProducts);
   console.log(products);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getProducts())
  },[dispatch])
  

  return (

    <>
      {/* <NavBar /> */}
      <Component>
        {/* here i used the box beacause after the navbar their is color in every elements */}
        <Banner />
        {/* <MidSlide  title="Deals of the Day"  timer={true}/> */}
        <Slide  products={products} title="Most Popular Mens Wear" timer={false}/>
        <Slide  products={products} title="Most Popular Womens Wear" timer={true}/>
        <Slide  products={products} title="Summer Wear For Men" timer={false}/>
        <Slide  products={products} title="Summer Wear For Women" timer={true}/>
        <Slide  products={products} title="Festive Wear" timer={false}/>
        <Slide  products={products} title="Giftings" timer={false}/>
        {/* <Slide  title="Giftings" timer={false}/> */}
        
        
        
      </Component>
    </>
  );
}
export default Home;
