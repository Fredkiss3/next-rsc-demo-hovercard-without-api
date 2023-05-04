import { loadPokemon } from "~/app/actions";

export default async function IssuePage({
  params,
}: {
  params: { id: string };
}) {
  const PokemonCard = await loadPokemon(Number(params.id));
  return <>{PokemonCard}</>;
}
