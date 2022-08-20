import React from "react";
import "./ContentModal.scss";
import { FaCoins } from 'react-icons/fa';

export const ContentModal = props => {
    const { data, show, buy } = props;
    return (
        <div className={`content-modal ${show} ${data.color}`} onClick={props.onClose}>
            <div className={props.type === "map" ? "modal-content map": "modal-content"}>
                <span className="close" onClick={props.onClose}>&times;</span>
                <img className="shop-img" src={data.img} alt={data.name}/>
                <h1>{data.name}</h1>
                <p>{data.content}</p>
                { data.cost && <p className="cost">Cost: {data.cost} <FaCoins/></p>}
                {buy && 
                <div className="buttons">
                    <button className='buy' onClick={props.onClose}>Buy Now</button>
                    <button className="add" onClick={props.onClose}>Add to Cart</button>
                </div>}
            </div>
        </div>
    );
}