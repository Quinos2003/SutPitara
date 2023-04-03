import { Box,styled } from '@mui/material'
import React from 'react'
import Videoget from '../../image/video1.mp4'


 const Vid = styled(Box)`
 width: 100%;
//  height: 500px;
  
  `;

  const Videodisplay=styled('video')(({theme})=>({
    // width: '100%',
    height: '400px',
    objectFit: 'fill',
    width: '-webkit-fill-available',
    padding: '20px 130px',
    [theme.breakpoints.down('sm')]:{
      objectFit: 'cover',
      height: 180
  
  }

  }));

const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


export default function Video() {
  return (
    <Vid >
      <Videodisplay  controls >
      {/* <source src="https://youtu.be/ev4xJpZZCnA?list=TLGGwxPm5sWZu3cwMTA0MjAyMw" type="video/mp4"/> */}
      <source src={Videoget} type="video/mp4"/>
     </Videodisplay>
    </Vid>
  )
}
