import { getWorld } from "@/src/entities/world/WorldApi";
import { SessionCreateModal } from "./SessionCreateModal";
import { getCharacter } from "@/src/entities/character/characterApi";
import { mapCharacterToCard } from "@/src/entities/character/model/mappers";
import { mapWorldToCard } from "@/src/entities/world/model/mappers";

export const CreateSessionWrap = async () => {
  const characters = (await getCharacter()).map(mapCharacterToCard);
  const worlds = (await getWorld()).map(mapWorldToCard);

  return <SessionCreateModal characters={characters} worlds={worlds} />;
};
