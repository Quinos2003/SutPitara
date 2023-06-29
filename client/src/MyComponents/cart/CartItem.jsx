import styled from "styled-components";
import { GrAdd, GrSubtract } from "react-icons/gr";
import React, { useState, useEffect } from "react";
import { products } from "../constants/data";
import { useSelector, useDispatch } from 'react-redux';
import EmptyCart from "./EmptyCart";

const CartItem = () => {

  const cartItems = useSelector((state) => state.cart);

  // console.log(cartItems);
  const dispatch = useDispatch();

  // Load counters value from local storage or use default value
  const savedCounters = localStorage.getItem('counters');


  //Counter logic starts here
  const [counters, setCounters] = useState(() => {
    return savedCounters ? JSON.parse(savedCounters) : Array(products.length).fill(1);
  });

  useEffect(() => {
    // Save counters value to local storage whenever it changes
    if (cartItems.length > 0) {
      localStorage.setItem('counters', JSON.stringify(counters));
    }  }, [counters]);

  const increase = (index) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = newCounters[index] + 1;
      return newCounters;
    });
  };

  const decrease = (index) => {
    if (counters[index] === 1) {
      return;
    }
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = newCounters[index] - 1;
      return newCounters;
    });
  };


  // Remove from cart
  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });

    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters.splice(itemId, 1); // Remove the corresponding counter from the counters array
      return newCounters;
    });
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('counters', JSON.stringify(counters));
    } else {
      localStorage.removeItem('counters');
    }
  }, [counters, cartItems]);



  const fassured =
    "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TasvaDay123290_900x.jpg?v=1655982825";

  return (
    <div>
      {cartItems.length === 0 ? (<EmptyCart/>):(
        <div>
          {cartItems.map((product,index) => {
            const counter = counters[index]; // Get the counter value for the current product
            return (
              <Container key={index}>
                <ImageContainer>
                  <img src={product.url} alt={product.title.shortTitle} />
                  <RemoveItem id="remove1" onClick={()=> removeFromCart(product.id)}>Remove</RemoveItem>
                </ImageContainer>
                <div className="item-container">
                  <ItemInfoContainer>
                    <h3 style={{ fontWeight: "500" }}>{product.title.shortTitle}</h3>
                    <div id="item-container">
                      <p>Color: Pink</p>
                      <p>Size : {product.size}</p>
                      <span>
                        <p>Price : Rs. {Math.round(product.price.mrp - product.price.mrp*product.price.discount)}</p>
                        <p id="mrp">MRP : Rs. {product.price.mrp}</p>
                      </span>
                      <p style={{color:"green"}}>Discount: {product.price.discount *100}% off</p>
                    </div>
                    <RemoveItem id="remove2" onClick={()=> removeFromCart(product.id)}>Remove</RemoveItem>
                  </ItemInfoContainer>
                  <QuantityCounter>
                    <p style={{ fontWeight: "500"}}>Quantity</p>
                    <Quantity>
                      <GrSubtract
                        onClick={() => decrease(index)}
                        style={{
                          borderRadius: "8rem",
                          background: "white",
                          padding: "0.1rem",
                          cursor: "pointer",
                        }}
                      />
                      <span style={{ maxWidth: "0.7rem" }}>{counter}</span>
                      <GrAdd
                        onClick={() => increase(index)}
                        style={{
                          borderRadius: "8rem",
                          background: "white",
                          padding: "0.1rem",
                          cursor: "pointer",
                        }}
                      />
                    </Quantity>
                  </QuantityCounter>
                  <TotalAmountContainer>
                    <p>Total</p>
                    <p>Rs.{Math.round(product.price.mrp - product.price.mrp*product.price.discount) * counter}</p>
                  </TotalAmountContainer>
                </div>
              </Container>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Rest of the code...

export default CartItem;


const Container = styled.div`
    margin: 0 auto;
    height:inherit;
    display:flex;
    gap:3rem;
    padding:1rem ;
    align-items:center;
    border-bottom: 1px solid #e0e0e0;
    #mrp{
        text-decoration:line-through;
        font-size:0.8rem;
    }
    .item-container{
      display:flex;
      gap:3rem;
      justify-content:space-between;
    }
    #remove1{
      display:none;
    }
    #remove2{
      display:block;
    }
    #item-container{
      display:flex;
      flex-direction:column;
      flex-wrap:wrap;
      gap:1rem;
      span{
        display:flex;
        gap:1rem;
      }
    }


/* //smartphone landscape */
@media screen and (min-width: 480px) and (max-width: 650px)  {
  .item-container{
    flex-direction:column;
    gap:1.2rem;
  }
  #item-container{
    flex-direction:row;
    gap:1.5rem;
    span{
      flex-direction:column;      
    }
  }
  #remove1{
    display:block;
    text-align:center;
    font-size:0.9rem;
  }
  #remove2{
    display:none;
  }
}

/* //smartphone portrait */
@media screen and (min-width: 300px) and (max-width: 479px) {
  .item-container{
    flex-direction:column;
    gap:1.2rem;
  }
  #item-container{
    flex-direction:row;
    gap:1.5rem;
    span{
      flex-direction:column;      
    }
  }
}
`
const ImageContainer = styled.div`
    img{
        width:8rem;
        height:10rem;
    }
`
const ItemInfoContainer = styled.div`
    min-width: 16%;
    max-width: 25%;
    font-size: 0.9rem;
    p{
        color:#6B6B6B;
        padding:0;
        margin:0;
    }
    /* //smartphone landscape */
    @media screen and (min-width: 480px) and (max-width: 650px)  {
        min-width:100%;
    }
    
    /* //smartphone portrait */
    @media screen and (min-width: 300px) and (max-width: 479px) {
        min-width:100%;
    }
`
const TotalAmountContainer = styled.div`
    font-weight:500;
    text-align:start;
    min-width: 15%;
    max-width: 15%;
`
const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #e0e0e0;
    border-radius: 0.5rem;
    width:8rem;
    height: 2rem;
    margin-top:1rem;
    padding:0 0.5rem;
`
const QuantityCounter = styled.div`
  p{
    text-align:center;
  }
  /* //smartphone landscape */
  @media screen and (min-width: 480px) and (max-width: 650px)  {
    p{
      text-align:start;
    }
  }
  
  /* //smartphone portrait */
  @media screen and (min-width: 300px) and (max-width: 479px) {
    p{
      text-align:start;
    }
  }

`
const RemoveItem = styled.span`
    font-size: 0.8rem;
    font-style: italic;
    color: #FF5B5B;
    &:hover{
        cursor:pointer;
        color:#FF1C1C;
        transition: all 0.2s ease-in-out;
    }
`
