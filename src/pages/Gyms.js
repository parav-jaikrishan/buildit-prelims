import React from 'react';
import { Header } from '../components/header/Header';
import { LaptopNavbar } from '../components/laptop-navbar/LaptopNavbar';
import { GymsContent } from '../components/gyms-content/GymsContent';

export const Gyms = () => {
    return (
        <div>
            <Header/>
            <div className="content-container">
                <LaptopNavbar/>
                <GymsContent/>
            </div>
        </div>
    );
}