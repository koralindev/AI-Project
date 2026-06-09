export async function createSession({
  worldId,
  characterId,
}: {
  worldId: string;
  characterId: string;
}) {
  return {
    id: `${worldId}-${characterId}`,
  };
}
