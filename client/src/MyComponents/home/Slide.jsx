import { Button, Divider, Box, Typography, styled } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { products } from "../constants/data";

// const Image=styled('img')({
//     width: '100%',
//     height: 280
// })

const responsive = {
  // desktop: {
  //   breakpoint: { max: 3000, min: 1024 },
  //   items: 5,
  // },
  // tablet: {
  //   breakpoint: { max: 1024, min: 464 },
  //   items: 2,
  // },
  // mobile: {
  //   breakpoint: { max: 464, min: 0 },
  //   items: 1,
  // },
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 7,
    // slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    // slidesToSlide: al,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #f7ede1;
  padding: 10px;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
  background: #f7ede1;
`;
const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;
const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 32px;
`;
const ViewAllButton = styled(Button)`
border-radius: 2px
font-size: 13px;
font-weight: 600;
white-space: nowrap;
height: 36px;
text-decoration: none;
`;
// const Image = styled("img")({
//   width: "auto",
//   height: 150,

// });
const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "19rem",
  objectFit:"contain",
  [theme.breakpoints.down("sm")]: {
    objectFit: "contain",
    // height: 180
  },
}));

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;


const RenderTimer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Slide = ({ data, timer, title , gender }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <RenderTimer variant="span">
        {hours} : {minutes} : {seconds} Left
      </RenderTimer>
    );
  };


  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img
              src={timerURL}
              style={{ width: 24 }}
              alt="time clock"
              
            />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}
        <Link to={`/${gender}`} style={{marginLeft:"auto"}}>
          <ViewAllButton variant="contained" style={{ background: "rgb(131, 3, 4)"}}>
            View All
          </ViewAllButton>
        </Link>
      </Deal>
      <Divider />
      <Carousel
        // swipeable={false}
        swipeable={true}
        draggable={false}
        // draggable={true}
        responsive={responsive}
        // centerMode={true}

        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        // slidesToSlide={1}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <Link to={{pathname:`/product/${product.id}`, state :product}} style={{ textDecoration: "none" }}>
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url}   />
             
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
             
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
