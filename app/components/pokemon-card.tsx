import * as React from "react";
import type { Pokemon } from "../actions";
import { PokeCardClient } from "./poke-cardclient";

export function PokemonSkeleton() {
  return (
    <div className="border rounded-md bg-gray-600 border-gray-200 font-normal absolute top-0 right-[calc(100%+.5rem)]  p-2">
      Loading pokemon...
    </div>
  );
}

export function PokemonCardShow({
  pokemon,
  inPlace,
}: {
  pokemon: Pokemon;
  inPlace: boolean;
}) {
  const pokemonSVGURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

  return (
    <dl
      className={`border rounded-md bg-gray-600 border-gray-200 font-normal ${
        inPlace ? "absolute" : ""
      } top-0 right-[calc(100%+.5rem)] p-2`}
    >
      <div className="flex gap-2">
        <dt>ID : </dt>
        <dd>
          <b>{pokemon.id}</b>
        </dd>
      </div>
      <div className="flex gap-2">
        <dt>Name: </dt>
        <dd>{pokemon.name}</dd>
      </div>
      <div className="flex gap-2">
        <dt>Species: </dt>
        <dd>{pokemon.species.name}</dd>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={pokemonSVGURL}
        alt={pokemon.name}
        style={{
          width: `200px`,
          height: `200px`,
        }}
      />

      <PokeCardClient />
    </dl>
  );
}
