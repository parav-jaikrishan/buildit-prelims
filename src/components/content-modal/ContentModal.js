import React from "react";
import "./ContentModal.scss";

export const ContentModal = props => {
    const { data, show, buy } = props;
    return (
        <div className={`content-modal ${show}`} onClick={props.onClose}>
            <div className="modal-content">
                <span className="close" onClick={props.onClose}>&times;</span>
                <img className="shop-img" src={data.img} alt={data.name}/>
                <h1>{data.name}</h1>
                <p>{data.content}</p>
                { data.cost && <p className="cost">Cost: {data.cost}</p>}
                {buy && <button className='buy' onClick={props.onClose}>Buy Now</button>}
            </div>
        </div>
    );
}