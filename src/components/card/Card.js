import React from 'react';
import "./Card.scss";

export const Card = (props) => {
  return (
      <div onClick={props.clicked} className="card" >
        <img src={props.image} />
        <p>{props.name}</p>
      </div>
  );
}