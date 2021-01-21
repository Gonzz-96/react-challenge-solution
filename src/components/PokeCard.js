import React from "react";

const PokeCard = ({ pokemon }) => {
  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt="Normal Pokemon" />
      <img src={pokemon.sprites.front_shiny} alt="Shiny Pokemon" />
    </>
  );
};

export default PokeCard;
