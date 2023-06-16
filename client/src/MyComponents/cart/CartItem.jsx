import styled from "styled-components";
import { GrAdd, GrSubtract } from "react-icons/gr";
import React, { useState, useEffect } from "react";
import { products } from "../constants/data";

const CartItem = ({ removeItemFromCart, updateTotalAmount ,totalIte}) => {




  const [counters, setCounters] = useState(
    Array(products.length).fill(1) // Initialize counters array with length equal to products array length
  );

  const [totalAmount, setTotalAmount] = useState(0); // State to store the total amount
  const [totalItems, setTotalItems] = useState(0);
  //calculate total amount
  useEffect(() => {
    // Calculate total amount whenever counters or products change
    const calculateTotalAmount = () => {
      let total = 0;
      for (let i = 0; i < products.length; i++) {
        total += products[i].price.mrp * counters[i];
      }
      setTotalAmount(total);
      updateTotalAmount(total);
      console.log(total)
    };

    calculateTotalAmount();
  }, [counters, products]);

//calculate total items in cart
const updateTotalItems = (items) => {
    setTotalItems(items);
  };

  useEffect(() => {
    const calculateTotalItems = () => {
      let total = 0;
      for (let i = 0; i < products.length; i++) {
        total += counters[i];
      }
    setTotalItems(total);
      updateTotalItems(total);
      console.log(total)
    };
  
    calculateTotalItems();
  }, [counters, updateTotalItems]);

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

  const fassured =
    "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TasvaDay123290_900x.jpg?v=1655982825";

  return (
    <div>
      {products.map((product, index) => {
        const counter = counters[index]; // Get the counter value for the current product
        return (
          <Container key={product.id}>
            <ImageContainer>
              <img src={product.url} alt={product.title.shortTitle} />
            </ImageContainer>
            <ItemInfoContainer>
              <h3 style={{ fontWeight: "500" }}>{product.title.shortTitle}</h3>
              <p>Color: Pink</p>
              <p>Size : M</p>
              <p>MRP : Rs.{product.price.mrp}</p>
              <RemoveItem>Remove</RemoveItem>
            </ItemInfoContainer>
            <QuantityCounter>
              <p style={{ fontWeight: "500", textAlign: "center" }}>Quantity</p>
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
              <p>Rs.{product.price.mrp * counter}</p>
            </TotalAmountContainer>
          </Container>
        );
      })}
    </div>
  );
};

// Rest of the code...

export default CartItem;


const Container = styled.div`
    width:inherit;
    height:inherit;
    display:flex;
    justify-content:space-between;
    gap:3rem;
    padding:1rem ;
    border-bottom: 1px solid #e0e0e0;
`
const ImageContainer = styled.div`
    img{
        width:8rem;
        height:10rem;
    }
`
const ItemInfoContainer = styled.div`
    max-width: 20%;
    font-size: 0.9rem;
    p{
        color:#6B6B6B;
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
