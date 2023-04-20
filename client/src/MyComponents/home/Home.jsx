import React from "react";
// import NavBar from "./NavBar";
// import { useEffect } from "react";
import Banner from "./Banner";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";
// import {useDispatch, useSelector} from'react-redux'
// import MidSlide from "./MidSlide";
import { useEffect } from "react";

// import {getProducts } from '../../redux/actions/productActions'
// import Video from "./Video";

const Component = styled(Box)`
  // padding: 10px;
  background: #f7ede1;
  // background: red;
`;

// export default function Home() {
  
const  Home =() => {

  //  const {products} =useSelector(state => state.getProducts);
  //  console.log(products);
  // const dispatch = useDispatch();

  // useEffect(() =>{
  //   dispatch(getProducts())
  // },[dispatch])
  

  return (

    <>
      
      <Component>
        <Banner />
        {/* <Video/> */}
        <Slide  title="Most Popular Mens Wear" timer={false}/>
        <Slide  title="Most Popular Womens Wear" timer={true}/>
        <Slide  title="Summer Wear For Men" timer={false}/>
        <Slide  title="Summer Wear For Women" timer={true}/>
        <Slide  title="Festive Wear" timer={false}/>
        <Slide  title="Giftings" timer={false}/>
      
        
        
        
      </Component>
    </>
  );
}
export default Home;
