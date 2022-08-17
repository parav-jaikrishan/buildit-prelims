import React from "react";
import { Header } from "../components/header/Header";
import { LaptopNavbar } from "../components/laptop-navbar/LaptopNavbar";
import { HomeContent } from "../components/home-content/HomeContent";
import "./style.scss";

export const Home = () => {
    return (
        <div>
            <Header/>
            <div className="content-container">
                <LaptopNavbar/>
                <HomeContent/>
            </div>
        </div>
    );
}