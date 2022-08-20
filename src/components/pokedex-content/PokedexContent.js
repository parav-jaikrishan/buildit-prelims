import React, { useState} from 'react';
import { Card } from '../card/Card';
import { ContentModal } from '../content-modal/ContentModal';
import "./PokedexContent.scss";

export const PokedexContent = () => {
    const pokedexCards = [
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
    const pokedexModals = [
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
        Array(pokedexModals.length).fill(false)
    );
    const [input, setInput] = useState("");
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
    const inputHandler = (e) => {
        setInput(e.target.value.toLowerCase());
    }
    return (
        <div className="pokedex-content">
            <h1>Pokedex</h1>
            <input type="text" placeholder='Search' onChange={inputHandler}/>
            <div className="card-container">
                    {
                        // eslint-disable-next-line
                        pokedexCards.map((card, index) => {
                        if(card.name.includes(input)) {
                            return (
                                <Card key={index} name={card.name} image={card.img} clicked={() => openModal(index)}/>
                            );
                        }
                        if(input === "") {
                            return (
                                <Card key={index} name={card.name} image={card.img} clicked={() => openModal(index)}/>
                            );
                        }
                    })}
                </div>
                    {
                        //eslint-disable-next-line
                        pokedexModals.map((modal, index) => {
                        if(openedModal[index])
                            return (
                                <ContentModal key={index} show={showModal} data={modal} onClose={() => closeModal()}/>
                            );
                    })}
        </div>
    );
}