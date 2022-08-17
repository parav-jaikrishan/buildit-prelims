import React from 'react';
import { AboutContent } from '../components/about-content/AboutContent';
import { Header } from "../components/header/Header";
import { LaptopNavbar } from "../components/laptop-navbar/LaptopNavbar";
import "./style.scss";

export const About = () => {
    return (
        <div>
            <Header/>
            <div className="content-container">
                <LaptopNavbar/>
                <AboutContent/>
            </div>
        </div>
    )
}