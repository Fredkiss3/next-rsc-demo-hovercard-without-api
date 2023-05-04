"use client";
import Link from "next/link";
import * as React from "react";
import { PokemonSkeleton } from "./pokemon-card";
import { loadPokemon } from "../actions";

export type PokemonItemClientProps = {
  id: number;
  name: string;
};

export function PokemonItemClient({ id, name }: PokemonItemClientProps) {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <>
      <Link
        href={`/pokemon/${id}`}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
        className="font-bold relative"
      >
        #{id} - {name}
        {isHovering && (
          <React.Suspense fallback={<PokemonSkeleton />}>
            <PokemonCard id={id} />
          </React.Suspense>
        )}
      </Link>
    </>
  );
}

const loadPokemonHover = React.cache(loadPokemon);

export function PokemonCard({ id }: { id: number }) {
  const Pokemon = React.use(loadPokemonHover(id, true));
  return <>{Pokemon}</>;
}
