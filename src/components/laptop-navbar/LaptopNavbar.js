import React from "react";
import { Link } from "react-router-dom";
import { FaHome, AiTwotoneShopping, TbMapSearch, GiGymBag } from "react-icons/fa";

export const LaptopNavbar = () => {
    return (
        <div class="laptop-navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/shop">Shop</Link>
            <Link className="link" to="/maps">Maps</Link>
            <Link className="link" to="/gyms"><GiGymBag className="icon"/>Gyms</Link>
        </div>
    );
}