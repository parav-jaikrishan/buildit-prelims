import React from 'react';
import "./Card.scss";
import bulbasaur from "../../assets/bulbasaur.png";
import image1 from "../../assets/031.png";
import image2 from "../../assets/591.png";
import rowlet from "../../assets/rowlet.png";

export const Card = () => {
  return (
    <div className="card-container">
      <div className="card" >
          <div className="card-body">
            <img src={bulbasaur} />
          </div>
          <div className="card-footer small">
            Bulbasaur
          </div>
      </div>
      <div className="card" >
          <div className="card-body">
            <img src={image1}/>
          </div>
          <div className="card-footer small">
            Pokemon
          </div>
      </div>
      <div className="card" >
          <div className="card-body">
            <img src={image2} />
          </div>
          <div className="card-footer small">
            Bulbasaur
          </div>
      </div>
      <div className="card" >
          <div className="card-body">
            <img src={rowlet}/>
          </div>
          <div className="card-footer small">
            Rowlet
          </div>
      </div>
    </div>
  );
}