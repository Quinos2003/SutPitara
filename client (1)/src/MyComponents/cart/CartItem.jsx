import styled from "styled-components";
import { GrAdd,GrSubtract } from "react-icons/gr";
import React,{useState} from "react";
import {products} from "../constants/data"

const CartItem = ({ item, removeItemFromCart }) => {

    const [counter, setCounter]= useState(1);
    const increase=()=>{
        setCounter(()=>counter+1);
      }
      const decrease=()=>{
        if(counter === 1){
          return;  
        }
        setCounter(()=>counter - 1);
      }


    const fassured = 'https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TasvaDay123290_900x.jpg?v=1655982825';

    return (
        <div>
                        {
        products.map((product,key) => {
            return(
                <Container key={product.id}>
                    <ImageContainer><img src={product.url}/></ImageContainer>
                    <ItemInfoContainer>
                        <h3 style={{fontWeight:"500"}}>{product.title.shortTitle}</h3>
                        <p>Color: Pink</p>
                        <p>Size : M</p>
                        <p>MRP : Rs.{product.price.mrp}</p>
                        <RemoveItem>Remove</RemoveItem>
                    </ItemInfoContainer>
                    <QuantityCounter>
                        <p style={{fontWeight:"500", textAlign:"center"}}>Quantity</p>
                        <Quantity>
                            <GrSubtract onClick={decrease}style={{ borderRadius:"8rem", background:"white", padding:"0.1rem", cursor:"pointer"}}/>
                                <span style={{maxWidth:"0.7rem"}}>{counter}</span>
                            <GrAdd onClick={increase} style={{ borderRadius:"8rem", background:"white", padding:"0.1rem", cursor:"pointer"}}/>
                        </Quantity>
                    </QuantityCounter>
                    <TotalAmountContainer>
                        <p>Total</p>
                        <p>Rs.{product.price.mrp*counter}</p>
                    </TotalAmountContainer>
                    
                </Container>
            )
        })
    }
        </div>
    )
}

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
export default CartItem;