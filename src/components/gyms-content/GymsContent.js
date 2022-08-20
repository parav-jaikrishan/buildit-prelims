import React, { useState } from 'react';
import { Card } from '../card/Card';
import { ContentModal } from '../content-modal/ContentModal';
import "./GymsContent.scss";

export const GymsContent = () => {
    const gymCards = [
        {
            name: 'Bulbasaur',
            img: 'assets/bulbasaur.png',
        },
        {
            name: 'Nidoqueen',
            img: 'assets/nidoqueen.png',
        },
        {
            name: 'Groudon',
            img: 'assets/groudon.png',
        },
        {
            name: 'Rowlet',
            img: 'assets/rowlet.png',
        }
    ];
    const gymModals = [
        {
            name: 'Bulbasaur',
            img: 'assets/bulbasaur.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name: 'Nidoqueen',
            img: 'assets/nidoqueen.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name: 'Groudon',
            img: 'assets/groudon.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name: 'Rowlet',
            img: 'assets/rowlet.png',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];
    const [openedModal, setOpenedModal] = useState(
        Array(gymModals.length).fill(false)
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
    }
    return (
        <div className="gyms-content">
            <h1>Gyms</h1>
            <p>These are the gyms in Pokemon's New Delhi Centre.</p>
            <div className="card-container">
                {gymCards.map((card, index) => {
                    return (
                        <Card key={index} name={card.name} image={card.img} clicked={() => openModal(index)}/>
                    );
                })}
            </div>
                {
                    //eslint-disable-next-line
                    gymModals.map((modal, index) => {
                    if(openedModal[index])
                        return (
                            <ContentModal key={index} show={showModal} data={modal} onClose={() => closeModal()}/>
                        );
                })}
        </div>
    );
}