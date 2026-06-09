"use client";

import { ModalSelectImport } from "@/src/features/session-create/ui/ModalSelectImport";
import Image from "next/image";
import { SelectWorld } from "./WorldCard";
import { useState } from "react";
import { ModalHeader } from "./ModalHeader";
import { SelectCharacter } from "./CharacterCard";
import { useRouter } from "next/navigation";
import { createSession } from "../api/createSession";

const worlds = [
  {
    uid: "2",
    name: "Катакомбы Серого Замка",
  },
  {
    uid: "23",
    name: "Лесной храм",
  },
  {
    uid: "24",
    name: "Заброшенная шахта",
  },
  {
    uid: "1",
    name: "Заброшенная шахта",
  },
  {
    uid: "5",
    name: "Заброшенная шахта",
  },
  {
    uid: "123",
    name: "Заброшенная шахта",
  },
  {
    uid: "12",
    name: "Заброшенная шахта",
  },
  {
    uid: "244",
    name: "Заброшенная шахта",
  },
  {
    uid: "42",
    name: "Заброшенная шахта",
  },
];

const characters = [
  {
    uid: "1",
    name: "Аэрин Серебрянный",
    race: "Эльф",
    class: "Маг",
    lvl: 7,
    hp: "42/69",
    kd: 13,
    avatar: "/alien.svg",
  },
  {
    uid: "2",
    name: "Торин Камнезуб",
    race: "Дворф",
    class: "Воин",
    lvl: 6,
    hp: "69/72",
    kd: 18,
    avatar: "/alien.svg",
  },
];

export const SessionCreateModal = () => {
  const router = useRouter();

  const [step, setStep] = useState<"world" | "character">("world");
  const [selectedWorldId, setSelectedWorldId] = useState<string | null>(null);

  const handleWorldSelect = (worldId: string) => {
    setSelectedWorldId(worldId);
    setStep("character");
  };

  const handleCharacterSelect = async (characterId: string) => {
    if (!selectedWorldId) return;

    const session = await createSession({
      worldId: selectedWorldId,
      characterId,
    });

    router.replace(`/sessions/${session.id}`);
  };

  const isWorld = step === "world";

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-[#111111] rounded-xl shadow-xl w-full max-w-[50%] max-h-[70vh] border border-[#D0D0D0]/25 flex flex-col">
        <div className="flex items-center justify-between border-b border-[#D0D0D0]/25 p-6 shrink-0">
          <div className="flex flex-col">
            <ModalHeader step={step} />
          </div>
          <button
            className="text-gray-400 hover:border-[#D0D0D0]/60"
            onClick={() => router.back()}
          >
            <Image src="/close.svg" alt="close modal" width={22} height={22} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 scrollbar scrollbar-thin scrollbar-thumb-[#9F9F9F] scrollbar-track-[#2C2C2C]">
          <ul className="grid grid-cols-2 gap-4">
            <ModalSelectImport step={step} />
            {isWorld &&
              worlds.map((world) => (
                <SelectWorld
                  key={world.uid}
                  selectItem={world}
                  onSelect={() => handleWorldSelect(world.uid)}
                />
              ))}
            {!isWorld &&
              characters.map((character) => (
                <SelectCharacter
                  key={character.uid}
                  selectItem={character}
                  onSelect={() => handleCharacterSelect(character.uid)}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
