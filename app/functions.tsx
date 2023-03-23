import { cache } from "react";

export const fetchPokemon = cache(async (id: number) =>
  wait(process.env.NODE_ENV === "production" ? 0 : 1000).then((_) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((json) => {
        return json as { name: string; id: number };
      })
  )
);

export function wait(ms: number): Promise<void> {
  // Wait for the specified amount of time
  return new Promise((resolve) => setTimeout(resolve, ms));
}
