import * as React from "react";
import { fetchPokemon } from "../functions";
import { PokemonItemClient } from "./pokemon-item-client";
import { QueryProvider } from "./query-provider";

export type PokemonItemProps = {
  id: number;
};

export async function PokemonItem({ id }: PokemonItemProps) {
  const pokemon = await fetchPokemon(id);
  return <PokemonItemClient name={pokemon.name} id={pokemon.id} />;
}
