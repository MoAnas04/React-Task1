import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img src={`${props.product.image}`} alt="product" />
    <h4>{props.product.title}</h4>
    <p>{`${props.product.price} $`}</p>
  </div>
);
