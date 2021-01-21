import React from "react";

const PokeCard = ({ pokemon }) => {
  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt="Normal Pokemon" />
      <img src={pokemon.sprites.front_shiny} alt="Shiny Pokemon" />
      <p>
        <a href={pokemon.video} target="_blank" rel="noreferrer">
          Check the pokemon video :)
        </a>
      </p>
    </>
  );
};

export default PokeCard;
