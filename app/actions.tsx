"use server";
import { PokemonCardShow } from "./components/pokemon-card";
import { fetchPokemon } from "./functions";

export type Pokemon = {
  id: number;
  name: string;
  species: {
    name: string;
  };
};

export async function loadPokemon(id: number, inPlace: boolean = false) {
  const pokemon = await fetchPokemon(id).then((r) => r as Pokemon);

  return (
    <PokemonCardShow
      inPlace={inPlace}
      pokemon={{
        id: pokemon.id,
        name: pokemon.name,
        species: pokemon.species,
      }}
    />
  );
}
