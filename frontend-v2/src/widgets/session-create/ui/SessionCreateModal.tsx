import { SelectImport } from "@/src/shared/ui/SelectImport";
import Image from "next/image";
import { SelectWorld } from "./SelectWorld";

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
];

export const SessionCreateModal = () => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-[#111111] rounded-xl shadow-xl max-w-1/2 w-full border border-[#D0D0D0]/25">
        <div className="flex items-center justify-between border-b border-[#D0D0D0]/25 p-6">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Выберите мир</h2>
            <span className="text-sm text-gray-400 mt-1">
              Шаг 1 из 2 — Место действия
            </span>
          </div>
          <button className="text-gray-400 hover:text-white">
            <Image
              src="/close.svg"
              alt="close modal"
              width={22}
              height={22}
            ></Image>
          </button>
        </div>
        <div className="p-6">
          <ul className=" grid grid-cols-2 gap-4">
            <SelectImport />
            {worlds.map((world, index) => (
              <SelectWorld key={index} world={world} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
