import React from 'react';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = Array.from({ length: totalStars }).map((_, index) => {
    if (index < fullStars) {
      return <span key={index} className="text-yellow-500">★</span>;
    } else if (hasHalfStar && index === fullStars) {
      return <span key={index} className="text-yellow-500">★</span>;
    } else {
      return <span key={index} className="text-gray-400">☆</span>;
    }
  });

  return (
    <div className="flex justify-center items-center w-full">
      {stars}
    </div>
  );
};

export default StarRating;
