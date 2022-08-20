import React, { useState} from 'react';
import { Card } from '../card/Card';
import { ContentModal } from '../content-modal/ContentModal';
import "./PokedexContent.scss";

export const PokedexContent = () => {
    const pokedexCards = [
        {
            name: 'Qutubex',
            img: 'assets/qutubex.png',
            color: 'brown'
        },
        {
            name: 'Bulbasaur',
            img: 'assets/bulbasaur.png',
            color: 'green'
        },
        {
            name: 'Ivysaur',
            img: 'assets/ivysaur.png',
            color: 'green'
        },
        {
            name: 'Venusaur',
            img: 'assets/venusaur.png',
            color: 'green'
        },
        {
            name: 'Charmander',
            img: 'assets/charmander.png',
            color: 'orange'
        },
        {
            name: 'Charmeleon',
            img: 'assets/charmeleon.png',
            color: 'orange'
        },
        {
            name: 'Charizard',
            img: 'assets/charizard.png',
            color: 'orange'
        },
        {
            name: 'Squirtle',
            img: 'assets/squirtle.png',
            color: 'blue'
        },
        {
            name: 'Wartortle',
            img: 'assets/wartortle.png',
            color: 'blue'
        },
        {
            name: 'Blastoise',
            img: 'assets/blastoise.png',
            color: 'blue'
        }
    ];
    const pokedexModals = [
        {
            name: 'Qutubex',
            img: 'assets/qutubex.png',
            color: 'brown'
        },
        {
            name: 'Bulbasaur',
            img: 'assets/bulbasaur.png',
            color: 'green'
        },
        {
            name: 'Ivysaur',
            img: 'assets/ivysaur.png',
            color: 'green'
        },
        {
            name: 'Venusaur',
            img: 'assets/venusaur.png',
            color: 'green'
        },
        {
            name: 'Charmander',
            img: 'assets/charmander.png',
            color: 'orange'
        },
        {
            name: 'Charmeleon',
            img: 'assets/charmeleon.png',
            color: 'orange'
        },
        {
            name: 'Charizard',
            img: 'assets/charizard.png',
            color: 'orange'
        },
        {
            name: 'Squirtle',
            img: 'assets/squirtle.png',
            color: 'blue'
        },
        {
            name: 'Wartortle',
            img: 'assets/wartortle.png',
            color: 'blue'
        },
        {
            name: 'Blastoise',
            img: 'assets/blastoise.png',
            color: 'blue'
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
                        if(card.name.toLowerCase().includes(input)) {
                            return (
                                <Card key={index} name={card.name} image={card.img} color={card.color} clicked={() => openModal(index)}/>
                            );
                        }
                        if(input === "") {
                            return (
                                <Card key={index} name={card.name} image={card.img} color={card.color} clicked={() => openModal(index)}/>
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