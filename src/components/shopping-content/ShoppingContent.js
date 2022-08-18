import React from 'react';
import { Card } from '../card/Card';
import "./ShoppingContent.scss";
import bulbasaur from "../../assets/bulbasaur.png";
import nidoqueen from "../../assets/nidoqueen.png";
import groudon from "../../assets/groudon.png";
import rowlet from "../../assets/rowlet.png";

export const ShoppingContent = () => {
    const shoppingCards = [
        {
            name: 'Bulbasaur',
            img: bulbasaur,
        },
        {
            name: 'Nidoqueen',
            img: nidoqueen,
        },
        {
            name: 'Groudon',
            img: groudon,
        },
        {
            name: 'Rowlet',
            img: rowlet,
        }
    ];
    return (
        <div className="shopping-content">
            <h1>Shop</h1>
            <div className="card-container">
                {shoppingCards.map(card => {
                    return (
                        <Card name={card.name} image={card.img}/>
                    );
                })}
            </div>
        </div>
    );
}