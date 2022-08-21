import React from 'react';
import "./HomeContent.scss";

export const HomeContent = () => {
    return (
        <div className="home-content">
            <h1>Home</h1>
            <p>The time we have all been waiting for has finally come. Ash Ketchum is finally visiting India! Under 
                the guidance of Doctor Oak, he has learnt about the new Pokémon species Qutubex, found only in the worn-out 
                corners of the capital city of Delhi. It has been rumoured to be one of the most powerful rock type pokemons 
                ever seen. To help him on his adventure, Ash teams up with X, and embarks on a journey to defeat the three Gym Leaders.</p>
                <iframe src="https://www.youtube.com/embed/RVdME0VhnjE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}