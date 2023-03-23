import * as React from "react";
import Image from "next/image";
import { PokemonItem } from "./components/pokemon-item";

export default function Home() {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((id) => (
        <li key={id}>
          <React.Suspense fallback={<>loading pokemon...</>}>
            {/* @ts-expect-error */}
            <PokemonItem id={id} />
          </React.Suspense>
        </li>
      ))}
    </ul>
  );
}
