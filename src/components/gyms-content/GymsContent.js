import React, { useState } from 'react';
import { Card } from '../card/Card';
import { ContentModal } from '../content-modal/ContentModal';
import "./GymsContent.scss";
import bulbasaur from "../../assets/bulbasaur.png";
import nidoqueen from "../../assets/nidoqueen.png";
import groudon from "../../assets/groudon.png";
import rowlet from "../../assets/rowlet.png";

export const GymsContent = () => {
    const gymCards = [
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
    const gymModals = [
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