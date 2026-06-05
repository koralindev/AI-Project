"use client";

import { ModalSelectImport } from "@/src/widgets/session-create/ui/ModalSelectImport";
import Image from "next/image";
import { SelectWorld } from "./SelectWorld";
import { useState } from "react";
import { ModalHeader } from "./ModalHeader";
import { SelectCharacter } from "./SelectCharacter";

const worlds = [
  {
    name: "Катакомбы Серого Замка",
  },
  {
    name: "Лесной храм",
  },
  {
    name: "Заброшенная шахта",
  },
  {
    name: "Заброшенная шахта",
  },
  {
    name: "Заброшенная шахта",
  },
  {
    name: "Заброшенная шахта",
  },
  {
    name: "Заброшенная шахта",
  },
  {
    name: "Заброшенная шахта",
  },
  {
    name: "Заброшенная шахта",
  },
];

const characters = [
  {
    name: "Аэрин Серебрянный",
    race: "Эльф",
    class: "Маг",
    lvl: 7,
    hp: "42/69",
    kd: 13,
    avatar: "/alien.svg",
  },
  {
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
  const [step, setStep] = useState<"" | "world" | "character">("");

  const isEmpty = step === "";
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
            // onClick={() => selectStep("")}
          >
            <Image src="/close.svg" alt="close modal" width={22} height={22} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 scrollbar scrollbar-thin scrollbar-thumb-[#9F9F9F] scrollbar-track-[#2C2C2C]">
          <ul className="grid grid-cols-2 gap-4">
            <ModalSelectImport step={step} />
            {isEmpty &&
              worlds.map((selectItem, index) => (
                <SelectWorld
                  key={index}
                  selectItem={selectItem}
                  setStep={setStep}
                />
              ))}
            {isWorld &&
              characters.map((selectItem, index) => (
                <SelectCharacter
                  key={index}
                  selectItem={selectItem}
                  setStep={setStep}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
