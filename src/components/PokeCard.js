import React from "react";
import { mockPokemonData } from "../mock/pokeData";

const PokeCard = () => {
  return (
    <>
      <h1>{mockPokemonData.name}</h1>
      <img src={mockPokemonData.sprites.front_default} alt="Normal Pokemon" />
      <img src={mockPokemonData.sprites.front_shiny} alt="Shiny Pokemon" />
    </>
  );
};

export default PokeCard;
