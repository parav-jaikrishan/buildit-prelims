import React from 'react';
import { Header } from '../components/header/Header';
import { LaptopNavbar } from '../components/laptop-navbar/LaptopNavbar';
import { ShoppingContent } from '../components/shopping-content/ShoppingContent';

export const Shopping = () => {
    return (
        <div>
            <Header/>
            <div className="content-container">
                <LaptopNavbar/>
                <ShoppingContent/>
            </div>
        </div>
    );
}