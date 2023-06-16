import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

function Review(){
  return (
        <ReviewSection>
            <h3>Reviews</h3>
            <div class="review">
            <div style={{display:"flex",flexDirection:"column", alignItems:"center", gap:"0.4rem"}}>
                <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-posing-outdoors-in-natural-light.jpg" alt="" />
                <span style={{padding:"0.2rem",width:"fit-content", fontSize:"0.8rem", display:"flex",gap:"0.2rem", backgroundColor:"orange",color:"white"}}>4 <FaStar/></span>
            </div>
            <div className="comment">
                <div id="name-date">
                <span>Customer Name</span>
                <span>Date/Month/Year</span>
                </div>
                <p id="comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus eaque vel minima cum natus? Nostrum placeat alias assumenda quas libero?</p>
            </div>
            </div>
        </ReviewSection>
  )
};

const ReviewSection = styled.div`
  .review{
    display:flex;
    gap:1rem;
    width:80%;
    border:1px solid #ADADAD  ;
    border-radius:0.5rem;
    padding:0.7rem;
  }
  img{
    width:3rem;
    height:3rem;
    object-fit:cover;
    border-radius:80rem;
  }
  #name-date{
    display:flex;
    justify-content:space-between;
    font-size:0.9rem;
    color:#6F6F6F  ;
  }
  #comment{
    text-align:left;
    margin-top:0.5rem;
  }
`

export default Review;
