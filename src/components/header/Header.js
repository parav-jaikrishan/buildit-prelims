import React, { useState } from "react";
import "./Header.scss";
import pokemonLogo from "../../assets/pokemonLogo.png";
import { Link } from "react-router-dom";

export const Header = () => {
    const [mobileNavActive, setMobileNavActive] = useState("");
    const openMobileNav = () => {
        mobileNavActive === "" ? setMobileNavActive("active") : setMobileNavActive("");
    }
    return (
        <div>
            <div className="mobile-header">
                <div className= { "hamburger " + mobileNavActive } onClick={() => openMobileNav()}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <img src={pokemonLogo} alt="Pokemon logo"/>
                <div className={ "links " + mobileNavActive }>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/">Info</Link>
                    <Link className="link" to="/">Shop</Link>
                    <Link className="link" to="/">Maps</Link>
                </div>
            </div>
            <div className="laptop-header">                
                <img src={pokemonLogo} alt="Pokemon logo"/>
            </div>
        </div>
    );
}