import React from 'react';
import { Card } from '../card/Card';
import "./ShoppingContent.scss";

export const ShoppingContent = () => {
    return (
        <div className="shopping-content">
            <h1>Shop</h1>
            <Card />
        </div>
    );
}