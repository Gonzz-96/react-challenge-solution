import React from "react";
import "./styles.css";
import PokeCard from "./components/PokeCard";
import { mockPokemonData } from "./mock/pokeData";

// hello, this is a comment
export default function App() {
  return (
    <div className="App">
      <PokeCard pokemon={mockPokemonData} />
    </div>
  );
}
