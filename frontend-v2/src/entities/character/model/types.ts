type Character = {
  uid: string;
  name: string;
  race: string;
  class: string;
  description: string;
};

type CharacterDTO = {
  character_uid: string;
  display_name: string;
  display_race: string;
  display_class: string;
  system_description: string;
};
