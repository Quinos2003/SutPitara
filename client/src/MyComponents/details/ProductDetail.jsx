import styled, {css} from 'styled-components';
import Carousel from './Carousel';
import StarRating from './StarRating';
import { FaShoppingCart, FaTag } from "react-icons/fa"
import {BsTruck, BsHeart} from "react-icons/bs"
import Review from './Review';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { products } from '../constants/data';
import { useState } from 'react';
import { notification2 } from '../notifications/notification';



const ProductDetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");

//to send items into cart
  const addToCart = (selectedSize) => {
    dispatch({ type: 'ADD_TO_CART', payload: product, size: selectedSize} );
    notification2("Added to Cart");
    navigate('/cart');
  };
  console.log(selectedSize)

//to send item into wishlist
const addToWishlist = () => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    notification2("Added to Wishlist");
    navigate('/wishlist');

};

  //To select size of clothing
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const product = products.find((product) => product.id.toString() === id);
  const discountedPrice = Math.round(product.price.mrp * product.price.discount);

  return (
      <Main>
        <LeftSection>
          <Image>
            <img src="https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMKJSLMA0609_2227e775-4b6c-4f9e-862b-ef825a64e320_900x.jpg?v=1638334658"/>
          </Image>
          <Carousel/>
        </LeftSection>
        <RightSection>
          <Header>
            <h2>{product.title.longTitle}</h2>
            <p style={{padding:"0rem"}}>{product.tagline}</p>
            <Rating>
              <StarRating/> | 45 reviews
            </Rating>
          </Header>
            <Price>
              <p id="price">₹ {product.price.mrp-discountedPrice}</p>
              <p id="mrp">₹ {product.price.mrp}</p>
              <p id="discount">{product.price.discount*100}%</p>
            </Price>
            <Size>
              <span className={selectedSize === 'S' ? 'selected' : ''} onClick={() => handleSizeSelection('S')}
                    isActive={selectedSize === 'S'}>S</span>
              <span className={selectedSize === 'M' ? 'selected' : ''} onClick={() => handleSizeSelection('M')}
                    isActive={selectedSize === 'M'}>M</span>
              <span className={selectedSize === 'L' ? 'selected' : ''} onClick={() => handleSizeSelection('L')}
                    isActive={selectedSize === 'L'}>L</span>
              <span className={selectedSize === 'XL' ? 'selected' : ''} onClick={() => handleSizeSelection('XL')}
                    isActive={selectedSize === 'XL'}>XL</span>
            </Size>
            <ActionButton>
              <AddToCartButton id="common-button" onClick={()=>addToCart(selectedSize)}>
                <FaShoppingCart style={{color:"white", fontSize:"1.1rem"}}/><p>ADD TO CART</p>
              </AddToCartButton>
              <WishListButton id="common-button" onClick={addToWishlist}>
                <BsHeart style={{color:"black", fontSize:"1.1rem"}}/><p>ADD TO WISHLIST</p>
              </WishListButton>
            </ActionButton>


            <Delivery>
              <p>Delivery <BsTruck/></p>
              <input type="text" placeholder="Enter Pincode"/>
            </Delivery>

            <SmallText>
            <div>
              <FaTag id="fa-tags"/>
              Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
            </div>
            <div>
              <FaTag id="fa-tags"/>
              Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time
              transaction, Terms and Condition apply
            </div>
            <div>
              <FaTag id="fa-tags"/>
              Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select
              ACs
            </div>
            <div>
              <FaTag id="fa-tags"/>
              Partner OfferExtra 10% off upto ₹500 on next furniture purchase
            </div>
            </SmallText>
            <ProductDetails>
              <h3>Product Details</h3>
              <p><span>Description :</span> Lorem ipsum dolor sit, amet</p>
              <div>
                <p><span>Brand :</span> Roadster</p>
                <p><span>Colors :</span> White, Black, Red</p>
                <p><span>Sizes :</span> S, M, L, XL</p>
                <p><span>Material :</span> Cotton</p>
              </div>
            </ProductDetails>
            <Review/>

        </RightSection>
      </Main>
  );
};

const Main = styled.div`
  display:flex;
  height:100vh;
  width:80vw;
  margin:2rem auto;
  p{
    padding:0rem;
    margin:0rem;
  }
  h2{
    font-size:1.4rem;
    font-weight:600;
  }
  h3{
    font-size:1.2rem;
    text-transform:uppercase;
  }
  #price{
    font-size:1.5rem;
    font-weight:500;
  }
  #mrp{
    font-size:1.1rem;
    color: #7C7C7C;
    text-decoration:line-through;
  }
  #discount{
    color: #E07800 ;
    font-size:1.1rem;
    font-weight:600;
  }
  #common-button{
    font-size:1rem;
    font-weight:600;
    display:flex;
    align-items:center;
    text-transform:uppercase;
    gap:0.5rem;
    cursor:pointer;
  }
  #fa-tags{
    color:#7BE400 ;
    font-size:0.7rem;
    margin-right:0.3rem;
  }


  /* //smartphone landscape */
  @media screen and (min-width: 480px) and (max-width: 767px)  {
    flex-direction:column;
  }
  
  /* //smartphone portrait */
  @media screen and (min-width: 300px) and (max-width: 479px) {
    flex-direction:column;
  }

`
const Image = styled.div`
  overflow:hidden; 
  cursor:crosshair; 
  img{
    width:90%;
    height:80vh;
    object-fit:contain;
  }
  img:hover{
    transform:scale(1.05);
    // transition:all 0.6s;
}
  }
`

const LeftSection = styled.div`
  width:80rem;
  display:flex;
  flex-direction:column;  
  align-items:center;
  margin:0 auto;

  /* //smartphone landscape */
  @media screen and (min-width: 480px) and (max-width: 767px)  {
    width:30rem;
  }
  
  /* //smartphone portrait */
  @media screen and (min-width: 300px) and (max-width: 479px) {
    width:20rem;
  }
`

const RightSection = styled.div`
  width:fit-content;
  padding-top:1rem

`

const Header = styled.div`
`

const Rating = styled.span`
  display:flex;
  align-items:center;
  border: 1px solid #ADADAD ;
  border-radius: 0.3rem;
  width:fit-content;
  padding:0.3rem 0.5rem;
  margin:1.2rem 0rem;
`

const Price = styled.div`
  display:flex;
  align-items:center;
  gap:0.8rem;
  margin:1rem 0rem;
  border-top: 1px solid #DCDCDC;
  padding-top:1.1rem;

`

const Size = styled.div`
  display:flex;
  gap:1rem;
  span{
    font-size:1.2rem;
    width:3rem;
    height:3rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:80rem;
    background-color:#F2F2F2;
    border:1px solid white ;
    &:hover{
      background-color: #EBEBEB  ;
      border:1px solid #C1C1C1 ;
      transition: 0.3s ease-in-out;
      cursor:pointer;
    }
    &.selected {
      background-color: #ebebeb;
      border: 1px solid #c1c1c1;
    }
  }
`


const ActionButton = styled.span`
  display:flex;
  gap:2rem;
  margin:1rem 0rem;
  margin-bottom:2rem;
`
const AddToCartButton = styled.span`

  color:white;
  padding:0.9rem 2.5rem;
  background-color:#FF6C0F;
  &:hover{
    background-color: #B64701;
    transition: 0.25s;
  }
`

const WishListButton = styled.span`
  border:1px solid #C1C1C1 ;
  padding:0.9rem 1.5rem;
  cursor:pointer;
  &:hover{
    border:1px solid grey ;
  }
`

const Delivery = styled.div`
  border-top: 1px solid #DCDCDC;
  p{
    display:flex;
    align-items:center;
    gap:0.5rem;
    font-size:1.2rem;
    font-weight:600;
    text-transform:uppercase;
    margin:1.4rem 0rem 0.8rem 0rem;
  }
  input{
    font-size:1rem;
    width:15rem;
    height:1.7rem;
    border:1px solid #BEBEBE ;
    padding:0.5rem;
    outline:none;
  }

`
const SmallText = styled.div`
  font-size: 0.8rem;
  vertical-align: baseline;
  margin:1rem 0rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #DCDCDC;
  p {
    font-size: 14px;
    margin-top: 10px;
  }
`

const ProductDetails = styled.div`
padding-bottom: 1rem;

  span{
    font-weight:300;
    font-size:0.9rem;
    color:#7C7C7C;
  }
  div{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    p{
      border-bottom:1px solid #DCDCDC;
      width:60%;
    }
  }
  p{
    font-size:1rem;
    margin:0.8rem 0rem;
    display:flex;
    flex-direction:column;
  }
  `







export default ProductDetail;
