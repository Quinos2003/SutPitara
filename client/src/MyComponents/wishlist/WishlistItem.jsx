import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { useDispatch , useSelector } from 'react-redux';
import { removeFromWishlist } from "./wishlistReducer";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../constants/data";
import EmptyWishlist from "./EmptyWishlist";
function WishlistItem() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

  const wishlistItems = useSelector((state) => state.wishlist);

  const handleDelete = (id) => {
    dispatch(removeFromWishlist(id));
  };


  // Add to cart
  const product = products.find((product) => product.id.toString() === id);

  const addToCart = (id) => {
    const product = products.find((product) => product.id.toString() === id);
    dispatch({ type: 'ADD_TO_CART', payload: product });
    navigate('/cart');
    dispatch(removeFromWishlist(id));
  };

    // Check if the product already exists in the cart



  return (
    <div>
    {wishlistItems.length === 0 ? (
      <EmptyWishlist/>
    ) : (
      <div>
        {wishlistItems.map((item) => (
          <Container key={item.id}>
            <Image>
              <img src={item.url} alt={item.title.shortTitle} />
            </Image>
            <InfoContainer>
              <RemoveButton>
                <p style={{ color: "#65BA00" }}>{item.title.shortTitle}</p>
                <MdDelete
                  className="remove"
                  onClick={() => handleDelete(item.id)}
                />
              </RemoveButton>
              <h3>{item.title.shortTitle}</h3>
              <p id="description">
                {item.title.longTitle}
              </p>
              <Base>
                <Price>
                  <p id="price">Rs. {Math.round(item.price.mrp - item.price.mrp * item.price.discount)}</p>
                  <p id="off">Rs. {item.price.mrp}</p>
                  <p id="discount">{item.price.discount*100}% off</p>
                </Price>
                <AddToCartButton onClick={() => addToCart(item.id)}>Add to cart</AddToCartButton>
              </Base>
            </InfoContainer>
          </Container>
        ))}
      </div>
    )}
  </div>
);
};

const Container = styled.div`
  margin: 2px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  padding: 0.5rem;
  &:hover {
    transform: scale(1.002);
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    transition: 0.25s;
  }

  p {
    margin: 0;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0.5rem 0rem;
  }
  .remove {
    font-size: 1.5rem;
    color: grey;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 50%;
    &:hover {
      background-color: #e2e2e2;
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
