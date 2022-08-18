import React, { useState} from 'react';
import { Card } from '../card/Card';
import { ContentModal } from '../content-modal/ContentModal';
import "./ShoppingContent.scss";
import bulbasaur from "../../assets/bulbasaur.png";
import nidoqueen from "../../assets/nidoqueen.png";
import groudon from "../../assets/groudon.png";
import rowlet from "../../assets/rowlet.png";

export const ShoppingContent = () => {
    const shoppingCards = [
        {
            name: 'Bulbasaur',
            img: bulbasaur,
        },
        {
            name: 'Nidoqueen',
            img: nidoqueen,
        },
        {
            name: 'Groudon',
            img: groudon,
        },
        {
            name: 'Rowlet',
            img: rowlet,
        }
    ];
    const shoppingModals = [
        {
            name: 'Bulbasaur',
            img: bulbasaur,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name: 'Nidoqueen',
            img: nidoqueen,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name: 'Groudon',
            img: groudon,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name: 'Rowlet',
            img: rowlet,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ];
    const [openedModal, setOpenedModal] = React.useState(
        Array(shoppingModals.length).fill(false)
    );
    const [showModal, setShowModal] = React.useState("");
    const openModal = i => {
        let arr = Array(openedModal.length).fill(false);
        arr[i] = true;
        setOpenedModal(arr);
        setShowModal("show");
        console.log(openedModal)
    }
    const closeModal = () => {
        setOpenedModal(Array(openedModal.length).fill(false));
        setShowModal("");
    }
    return (
        <div className="shopping-content">
            <h1>Shop</h1>
            <div className="card-container">
                {shoppingCards.map((card, index) => {
                    return (
                        <Card key={index} name={card.name} image={card.img} clicked={() => openModal(index)}/>
                    );
                })}
            </div>
                {shoppingModals.map((modal, index) => {
                    if(openedModal[index])
                        console.log("This works")
                        return (
                            <ContentModal key={index} show={showModal} data={modal} onClose={() => closeModal()}/>
                        );
                })}
        </div>
    );
}