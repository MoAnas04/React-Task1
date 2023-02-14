import React from "react";
import "./card-list.styles.css";
import { Card } from "./productCard.component";

export const CardList = (props) => (
  <div className="card-list">
    {props.products.map((product) => (
      <Card key={product.id} product={product} />
    ))}
  </div>
);
