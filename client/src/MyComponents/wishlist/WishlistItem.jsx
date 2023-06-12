import React, { useState} from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";



function WishlistItem(){

    const [isInWishlist, setIsInWishlist] = useState(true);

    const handleDelete = () => {
      setIsInWishlist(!isInWishlist);
    };
  
    if (!isInWishlist) {
      return null; // Don't render anything if the item is deleted
    }
  

  return (
    <Container>
        <Image><img src="https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMKJSLMA0609_2227e775-4b6c-4f9e-862b-ef825a64e320_900x.jpg?v=1638334658"/></Image>
        <InfoContainer>
            <RemoveButton>
                <p style={{color:"#65BA00"}}>Instock</p>
                <MdDelete className="remove" onClick={handleDelete}/>
            </RemoveButton>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis?</p>
            <Base>
                <Price>  
                    <p id="price">Rs. 700</p>
                    <p id="off">Rs. 1000</p>
                    <p id="discount">30% off</p>
                </Price>
                <AddToCartButton>Add to cart</AddToCartButton>
            </Base>
        </InfoContainer>
      
    </Container>
  )
};

const Container = styled.div`
    margin:2px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e0e0;
    padding:0.5rem ;
    &:hover{
        transform: scale(1.002);
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
        transition: 0.25s;
    }

    p{
        margin:0;
    }

    h3{
        font-size: 1.3rem;
        font-weight: 500;
        margin:0.5rem 0rem;
    }
    .remove{
        font-size: 1.5rem;
        color:grey;
        cursor: pointer;
        padding:0.4rem;
        border-radius: 50%;
        &:hover{
            background-color: #E2E2E2;
            transition: 0.25s;
        }
    }
    #price{
        font-size: 1.1rem;
        font-weight: 600;
        color:#414141;
    }
    #off{
        font-size: 0.9rem;
        color:#4F4F4F;
        text-decoration: line-through;
        text-decoration-color: grey;
    }
    #discount{
        color:#22C300;
    }
    #description{
        font-size: 1rem;
        color:#7C7C7C;
    }
`
const Image = styled.div`
    img{
        width:7rem;
        height:9rem;
        object-fit: cover;
    }

`
const InfoContainer = styled.div`
    width: 80%;
    margin-top:0.5rem;
`
const RemoveButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Base = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:1rem;

`
const Price = styled.div`
    display: flex;
    align-items: center;
    gap:1.8rem;
`
const AddToCartButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem 3rem;
    cursor: pointer;
    background-color: #FF6C0F;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    &:hover{
        background-color:#B84908;
        transition: 0.25s;
    }

`

export default WishlistItem;
