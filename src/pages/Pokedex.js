import React from 'react';
import { Header } from '../components/header/Header';
import { LaptopNavbar } from '../components/laptop-navbar/LaptopNavbar';
import { PokedexContent } from '../components/pokedex-content/PokedexContent';

export const Pokedex = () => {
    return (
        <div>
            <Header/>
            <div className="content-container">
                <LaptopNavbar/>
                <PokedexContent/>
            </div>
        </div>
    )
}