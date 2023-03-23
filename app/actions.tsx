"use server";

export type Pokemon = {
  id: number;
  name: string;
  species: {
    name: string;
  };
};

import { fetchPokemon } from "./functions";

export async function loadPokemon(id: number) {
  const pokemon = await fetchPokemon(id).then((r) => r as Pokemon);

  return (
    // <PokemonCard
    // pokemon={
    {
      id: pokemon.id,
      name: pokemon.name,
      species: pokemon.species,
    }
    // }
    // />
  );
}
