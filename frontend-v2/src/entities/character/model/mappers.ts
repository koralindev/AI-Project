export const mapCharacterToCard = (character: CharacterDTO) => ({
  uid: character.character_uid,
  name: character.display_name,
  race: character.display_race,
  class: character.display_class,
  description: character.system_description,
});
