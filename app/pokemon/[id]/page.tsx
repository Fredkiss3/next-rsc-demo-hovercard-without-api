import { PokemonCard } from "~/app/components/pokemon-card";

export default function IssuePage({ params }: { params: { id: string } }) {
  return (
    <>
      <PokemonCard id={Number(params.id)} />
    </>
  );
}
