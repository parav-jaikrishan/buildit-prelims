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
            color: 'brown',
            content: `Emerged from the prehistoric walls of the renown minaret, The Qutub Minar, Qutubex is one of the specialties of Pokemon's New Delhi Centre`,
            stats: {
                hp: 75,
                attack: 83,
                defense: 78
            }
        },
        {
            name: 'Bulbasaur',
            img: 'assets/bulbasaur.png',
            color: 'green',
            content: `Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.`,
            stats: {
                hp: 20,
                attack: 20,
                defense: 20
            }
        },
        {
            name: 'Ivysaur',
            img: 'assets/ivysaur.png',
            color: 'green',
            content: `There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.`,
            stats: {
                hp: 30,
                attack: 35,
                defense: 30
            }
        },
        {
            name: 'Venusaur',
            img: 'assets/venusaur.png',
            color: 'green',
            content: `There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.`,
            stats: {
                hp: 40,
                attack: 45,
                defense: 35
            }
        },
        {
            name: 'Charmander',
            img: 'assets/charmander.png',
            color: 'orange',
            content: `It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.`,
            stats: {
                hp: 20,
                attack: 30,
                defense: 20
            }
        },
        {
            name: 'Charmeleon',
            img: 'assets/charmeleon.png',
            color: 'orange',
            content: `It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.`,
            stats: {
                hp: 30,
                attack: 30,
                defense: 30
            }
        },
        {
            name: 'Charizard',
            img: 'assets/charizard.png',
            color: 'orange',
            content: `It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.`,
            stats: {
                hp: 35,
                attack: 50,
                defense: 25
            }
        },
        {
            name: 'Squirtle',
            img: 'assets/squirtle.png',
            color: 'blue',
            content: `Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.`,
            stats: {
                hp: 20,
                attack: 20,
                defense: 30
            }
        },
        {
            name: 'Wartortle',
            img: 'assets/wartortle.png',
            color: 'blue',
            content: `Its tail is large and covered with rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.`,
            stats: {
                hp: 30,
                attack: 30,
                defense: 40
            }
        },
        {
            name: 'Blastoise',
            img: 'assets/blastoise.png',
            color: 'blue',
            content: `Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from adistance of over 160 feet.`,
            stats: {
                hp: 25,
                attack: 45,
                defense: 60
            }
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