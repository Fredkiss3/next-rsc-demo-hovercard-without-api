"use client";
import Link from "next/link";
import * as React from "react";
import { PokemonCard, PokemonSkeleton } from "./pokemon-card";

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
        onClick={() => {}}
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
            <PokemonCard id={id} inPlace />
          </React.Suspense>
        )}
      </Link>
    </>
  );
}
