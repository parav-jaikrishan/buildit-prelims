import React, { useState } from 'react';
import { Card } from '../card/Card';
import { ContentModal } from '../content-modal/ContentModal';
import "./MapsContent.scss";

export const MapsContent = () => {
    const mapCards = [
        {
            name: 'Map',
            img: 'assets/centre_map.png',
        },
        {
            name: 'Topaz Gym',
            img: 'assets/gym_2.png'
        },
        {
            name: 'Sapphire Gym',
            img: 'assets/gym_3.png'
        }, 
        {
            name: 'Ruby Gym',
            img: 'assets/gym_1.png'
        }
    ];
    const mapModals = [
        {
            img: 'assets/centre_map.png'
        },
        {
            name: 'Topaz Gym',
            img: 'assets/gym_2.png',
            content: `The gym trainer here is known to be very cheerful and optimistic. Fighting him will be an enlightening experience. 
            Even though the battle will be tough, a defeat won't hurt as much.`
        },
        {
            name: 'Sapphire Gym',
            img: 'assets/gym_3.png',
            content: `The gym trainer here is known to be serene and calm. His pokemons have unpredictable moves, always backed up by his wisdom.`
        }, 
        {
            name: 'Ruby Gym',
            img: 'assets/gym_1.png',
            content: `The gym trainer here is known to be very fierce and unforgiving with his moves. The strongest of the three, this trainer has been practising the art for years.`
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
            <h1>Maps/Gyms</h1>
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