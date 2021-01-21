import React from "react";
import { mockPokemonData } from "../mock/pokeData";

const PokeCard = () => {
  return (
    <>
      <h1>{mockPokemonData.name}</h1>
    </>
  );
};

export default PokeCard;
