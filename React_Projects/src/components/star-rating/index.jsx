import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
export default function StarRating({noOfStars=5}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndexId) {
    setRating(getCurrentIndexId);
  }
  function handleMouseMoveEnter(getCurrentIndexId) {
    setHover(getCurrentIndexId);
  }
  function handleMouseLeave(getCurrentIndexId) {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active":"inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMoveEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}
