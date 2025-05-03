import React from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Johnny Ahmad",
    time: "1 hour ago",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    stars: 4,
  },
  {
    id: 2,
    name: "Sarah Smith",
    time: "2 hours ago",
    text: "Great food and fast delivery! Highly recommend.",
    stars: 5,
  },
  {
    id: 3,
    name: "Ali Valiyev",
    time: "3 hours ago",
    text: "Good service but the food was a bit cold.",
    stars: 3,
  },
];

function FoodDetailBottom() {
  return (
    <>
      <h1>Customer Reviews</h1>
      {reviews.map((review) => (
        <div
          key={review.id}
          style={{
            border: "1px solid aliceblue",
            backgroundColor: "aliceblue",
            width: "500px",
            padding: "20px",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex" }}>
            <Image
              style={{ marginTop: "40px" }}
              src="/round.png"
              width={70}
              height={70}
              alt="round"
            />
            <div style={{ marginTop: "50px", marginLeft: "10px" }}>
              <h4>{review.name}</h4>
              <p>{review.time}</p>
            </div>
          </div>
          <div>
            <p style={{ width: "350px", marginTop: "10px" }}>{review.text}</p>
            {/* Star rendering */}
            <div style={{ display: "flex", marginTop: "20px" }}>
              {Array.from({ length: review.stars }).map((_, index) => (
                <Image
                  key={index}
                  src="/star1.png"
                  width={20}
                  height={20}
                  alt="star"
                  style={{ marginRight: "5px" }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FoodDetailBottom;
