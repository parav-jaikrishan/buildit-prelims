import React, { useState } from 'react';
import { Card } from '../card/Card';
import { ContentModal } from '../content-modal/ContentModal';
import "./MapsContent.scss";

export const MapsContent = () => {
    const mapCards = [
        {
            name: 'Map',
            img: 'assets/centre_map.png',
        }
    ];
    const mapModals = [
        {
            name: 'Map',
            img: 'assets/centre_map.png',
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
                        <Card key={index} name={card.name} image={card.img} type="map" clicked={() => openModal(index)}/>
                    );
                })}
            </div>
                {
                    //eslint-disable-next-line
                    mapModals.map((modal, index) => {
                    if(openedModal[index])
                        return (
                            <ContentModal key={index} show={showModal} data={modal} type="map" onClose={() => closeModal()}/>
                        );
                })}
        </div>
    );
}