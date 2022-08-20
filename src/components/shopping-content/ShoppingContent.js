import React, { useState } from 'react';
import { Card } from '../card/Card';
import { ContentModal } from '../content-modal/ContentModal';
import "./ShoppingContent.scss";

export const ShoppingContent = () => {
    const shoppingCards = [
        {
            name: 'Bulbasaur',
            img: 'assets/bulbasaur.png'

        },
        {
            name: 'Nidoqueen',
            img: 'assets/nidoqueen.png'
        },
        {
            name: 'Groudon',
            img: 'assets/groudon.png'
        },
        {
            name: 'Rowlet',
            img: 'assets/rowlet.png'
        }
    ];
    const shoppingModals = [
        {
            name: 'Bulbasaur',
            img: 'assets/bulbasaur.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            cost: 50
        },
        {
            name: 'Nidoqueen',
            img: 'assets/nidoqueen.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            cost: 80
        },
        {
            name: 'Groudon',
            img: 'assets/groudon.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            cost: 70
        },
        {
            name: 'Rowlet',
            img: 'assets/rowlet.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            cost: 90
        }
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