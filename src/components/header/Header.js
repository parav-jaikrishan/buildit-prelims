import React from "react";
import "./Header.scss";
import pokemonLogo from "../../assets/pokemonLogo.png";

export const Header = () => {
    return (
        <div>
            <div className="mobile-navbar">
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <img src={pokemonLogo} alt="Pokemon logo"/>
                <div className="links">
                    
                </div>
            </div>
        </div>
    );
}