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
        },
        {
            name: 'Energy Potion',
            img: 'assets/potion_energy.png'
        },
        {
            name: 'Hyper Potion',
            img: 'assets/potion_hyper.png'
        },
        {
            name: 'Pokeball',
            img: 'assets/pokeball_red.png'
        },
        {
            name: 'Yellow Pokeball',
            img: 'assets/pokeball_yellow.png'
        },
        {
            name: 'Purple Pokeball',
            img: 'assets/pokeball_purple.png'
        },
        {
            name: 'Oran Berry',
            img: 'assets/oran_berry.png'
        },
        {
            name: 'Bitter Berry',
            img: 'assets/bitter_berry.png'
        }
    ];
    const shoppingModals = [
        {
            name: 'Health Potion',
            img: 'assets/potion_health.png',
            content: 'A wound medicine. It restores the HP of one Pokémon by 20 points.',
            cost: 50
        },
        {
            name: 'Recovery Potion',
            img: 'assets/potion_recovery.png',
            content: 'A wound medicine. It restores the HP of one Pokémon by 30 points.',
            cost: 80
        },
        {
            name: 'Speed Potion',
            img: 'assets/potion_speed.png',
            content: 'Increases the speed of one Pokémon by 10 points',
            cost: 70
        },
        {
            name: 'Energy Potion',
            img: 'assets/potion_energy.png',
            content: 'Restores the energy of one Pokémon by 10 points.',
            cost: 40 
        },
        {
            name: 'Hyper Potion',
            img: 'assets/potion_hyper.png',
            content: 'Restores the HP of one Pokémon to 1000',
            cost: 100 
        },
        {
            name: 'Pokeball',
            img: 'assets/pokeball_red.png',
            content: 'Common pokéball, gives you a 20% chance of catching the Pokémon',
            cost: 35 
        },
        {
            name: 'Yellow Pokeball',
            img: 'assets/pokeball_yellow.png',
            content: 'Rare pokéball, gives you a 50% chance of catching the Pokémon',
            cost: 150
        },
        {
            name: 'Purple Pokeball',
            img: 'assets/pokeball_purple.png',
            content: 'Legendary pokéball, you are guaranteed of catching any Pokémon.',
            cost: 300
        },
        {
            name: 'Oran Berry',
            img: 'assets/oran_berry.png',
            content: 'Healing berry used for curing burns and other external injuries',
            cost: 80
        },
        {
            name: 'Bitter Berry',
            img: 'assets/bitter_berry.png',
            content: 'Healing berry which is used as an antidote for poison.',
            cost: 100
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