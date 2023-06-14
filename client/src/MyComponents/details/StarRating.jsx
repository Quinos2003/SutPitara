import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';

const StarRatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  cursor: pointer;
  position: relative;
  display: inline-block;

  &:before {
    content: '${props => (props.half ? "\\00BD" : "")}';
    position: absolute;
    width: 50%;
    height: 100%;
    overflow: hidden;
    color: #ffc107;
  }
`;

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <StarRatingWrapper>
      {[1, 2, 3, 4, 5].map((star) => {
        let icon;

        if (star <= rating) {
          icon = <FaStar />;
        } else {
          icon = <FaRegStar />;
        }

        return (
          <Star
            key={star}
            onClick={() => handleRating(star)}
            half={rating === star - 0.5}
          >
            {icon}
          </Star>
        );
      })}
      <span>{rating}</span>
    </StarRatingWrapper>
  );
};

export default StarRating;
