import styled from 'styled-components';
import Caraousal from './Caraousal';
import StarRating from './StarRating';
import { FaShoppingCart, FaHeart, FaTag } from "react-icons/fa"
import {BsTruck, BsHeart} from "react-icons/bs"
const ProductDetail = ({ product }) => {
  

  return (
    <>
      <Main>
        <LeftSection>
          <Image>
            <img src="https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMKJSLMA0609_2227e775-4b6c-4f9e-862b-ef825a64e320_900x.jpg?v=1638334658"/>
          </Image>
          <Caraousal/>
        </LeftSection>
        <RightSection>
          <Header>
            <h2>Pigeon Favourite Electric Kettle (1.5 L, Silver, Black)</h2>
            <Rating>
              <StarRating/> | 45 reviews
            </Rating>
          </Header>
            <Price>
              <p id="price">₹ 1,999</p>
              <p id="mrp">₹ 3000</p>
              <p id="discount">(66% off)</p>
            </Price>
            <Size>

            </Size>
            <ActionButton>
              <AddToCartButton id="common-button">
                <FaShoppingCart style={{color:"white", fontSize:"1.1rem"}}/><p>ADD TO CART</p>
              </AddToCartButton>
              <WishListButton id="common-button">
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
            </ProductDetails>

            <ReviewSection>
              <h3>Reviews</h3>
            </ReviewSection>

        </RightSection>
      </Main>

    </>
  );
};

const Main = styled.div`
  display:flex;
  margin:2rem;
  p{
    padding:0rem;
    margin:0rem;
  }
  h2{
    font-size:1.4rem;
    font-weight:600;
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

`
const Image = styled.div`
  overflow:hidden; 
  cursor:crosshair; 
  img{
    width:100%;
    height:80vh;
    object-fit:contain;
  }
  img:hover{
    transform:scale(1.05);
    transition:all 0.6s;
  }
`

const LeftSection = styled.div`
  width:50%;
  display:flex;
  flex-direction:column;  
  align-items:center;
  overflow:hidden;
`

const RightSection = styled.div`
  width:fit-content;
  border:1px solid #DCDCDC;
  padding:0rem 1.5rem;
  padding-top:1rem

`

const Header = styled.div`
`

const Rating = styled.span`
  display:flex;
  align-items:center;
  border: 1px solid #ADADAD ;
  border-radius: 0.5rem;
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

const ProductDetails = styled.div``

const ReviewSection = styled.div``




// This electric kettle from Pigeon will soon become a travelers best
// friend, a hostelite saviour and an answer to all the midnight
// cravings. With this handy appliance, you can boil water and use it
// to make instant noodles, packet soup, coffee and green tea.',
// discount: 'Extra 10% Off

export default ProductDetail;
