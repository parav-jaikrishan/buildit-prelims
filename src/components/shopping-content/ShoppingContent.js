import React, { useState } from 'react';
import { Card } from '../card/Card';
import { ContentModal } from '../content-modal/ContentModal';
import "./ShoppingContent.scss";

export const ShoppingContent = () => {
    const shoppingCards = [
        {
            name: 'Health Potion',
            img: 'assets/potion_health.png'

        },
        {
            name: 'Recovery Potion',
            img: 'assets/potion_recovery.png'
        },
        {
            name: 'Speed Potion',
            img: 'assets/potion_speed.png'
        }
    ];
    const shoppingModals = [
        {
            name: 'Health Potion',
            img: 'assets/potion_health.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            cost: 50
        },
        {
            name: 'Recovery Potion',
            img: 'assets/potion_recovery.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            cost: 80
        },
        {
            name: 'Speed Potion',
            img: 'assets/potion_speed.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            cost: 70
        },
    ];
    const [openedModal, setOpenedModal] = useState(
        Array(shoppingModals.length).fill(false)
    );
    const [showModal, setShowModal] = useState("");
    const openModal = i => {
        let arr = Array(openedModal.length).fill(false);
        arr[i] = true;
        setOpenedModal([...arr]);
        setShowModal("show");
    }
    const closeModal = () => {
        setOpenedModal(Array(openedModal.length).fill(false));
        setShowModal("");
    }
    return (
        <div className="shopping-content">
            <h1>Shop</h1>
            <p>Click to open a detailed view of all the things you can buy at Pokemon's New Delhi center.</p>
            <div className="card-container">
                {shoppingCards.map((card, index) => {
                    return (
                        <Card key={index} name={card.name} image={card.img} clicked={() => openModal(index)}/>
                    );
                })}
            </div>
                {
                    //eslint-disable-next-line
                    shoppingModals.map((modal, index) => {
                        if(openedModal[index]) {
                            return (
                                <ContentModal key={index} show={showModal} data={modal} onClose={() => closeModal()} buy={true} />
                            );
                        }
                })}
        </div>
    );
}