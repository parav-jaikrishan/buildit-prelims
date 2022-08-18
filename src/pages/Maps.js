import React from 'react';
import { Header } from '../components/header/Header';
import { LaptopNavbar } from '../components/laptop-navbar/LaptopNavbar';
import { MapsContent } from '../components/maps-content/MapsContent';

export const Maps = () => {
    return (
        <div>
            <Header/>
            <div className="content-container">
                <LaptopNavbar/>
                <MapsContent/>
            </div>
        </div>
    );
}