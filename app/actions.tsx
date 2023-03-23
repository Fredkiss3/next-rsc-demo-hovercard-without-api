"use server";
import { fetchPokemon } from "./functions";

export type Pokemon = {
  id: number;
  name: string;
  species: {
    name: string;
  };
};

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
