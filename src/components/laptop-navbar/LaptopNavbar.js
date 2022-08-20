import React from "react";
import "./LaptopNavbar.scss";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaMapMarkedAlt } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { TbPokeball } from "react-icons/tb";

export const LaptopNavbar = () => {
    return (
        <div className="laptop-navbar">
            <Link className="link" to="/" title="Home"><FaHome className="icon"/></Link>
            <Link className="link" to="/shop" title="Shopping"><FaShoppingCart className="icon"/></Link>
            <Link className="link" to="/maps" title="Maps"><FaMapMarkedAlt className="icon"/></Link>
            <Link className="link" to="/gyms" title="Gyms"><GiGymBag className="icon"/></Link>
            <Link className="link" to="/pokedex" title="Pokedex"><TbPokeball className="icon"/></Link>
        </div>
    );
}