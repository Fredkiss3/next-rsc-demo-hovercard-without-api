"use client";
import * as React from "react";

export type PokeCardClientProps = {};

export function PokeCardClient({}: PokeCardClientProps) {
  const [liked, setLiked] = React.useState(false);
  return (
    <button
      onClick={() => setLiked(!liked)}
      className="bg-blue-500 px-2 py-1 rounded-md text-center cursor-pointer relative z-10"
    >
      {liked ? "unlike" : "like"}
    </button>
  );
}
