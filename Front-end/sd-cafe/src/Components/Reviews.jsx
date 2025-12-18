import React from "react";

const reviews = [
  {
    name: "Amit Sharma",
    text: "Amazing coffee and very cozy place. Loved the vibe!",
    rating: 4.5,
  },
  {
    name: "Yomesh Nagar",
    text: "Best cafe in Mansarovar. Friendly staff & tasty food.",
    rating: 5,
  },
  {
    name: "Rohit Jain",
    text: "Perfect place to chill with friends ☕",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="reviews">
      <h2>What Our Customers Say ⭐</h2>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h4>{review.name}</h4>
            <p>{"⭐".repeat(review.rating)}</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
      <div className="separation1"></div>
    </section>
  );
};

export default Reviews;
