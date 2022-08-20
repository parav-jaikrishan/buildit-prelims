import React, { useState } from 'react';
import { Card } from '../card/Card';
import { ContentModal } from '../content-modal/ContentModal';
import "./MapsContent.scss";

export const MapsContent = () => {
    const mapCards = [
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
    const mapModals = [
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
        Array(mapModals.length).fill(false)
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
        <div className="maps-content">
            <h1>Maps</h1>
            <p>These are the places you need to visit, young soldier.</p>
            <div className="card-container">
                {mapCards.map((card, index) => {
                    return (
                        <Card key={index} name={card.name} image={card.img} clicked={() => openModal(index)}/>
                    );
                })}
            </div>
                {
                    //eslint-disable-next-line
                    mapModals.map((modal, index) => {
                    if(openedModal[index])
                        return (
                            <ContentModal key={index} show={showModal} data={modal} onClose={() => closeModal()}/>
                        );
                })}
        </div>
    );
}