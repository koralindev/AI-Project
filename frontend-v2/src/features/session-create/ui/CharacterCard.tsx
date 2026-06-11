import Image from "next/image";

type SelectCharacterProps = {
  selectItem: Character;
  onSelect: () => void;
};

export const SelectCharacter = ({
  selectItem,
  onSelect,
}: SelectCharacterProps) => {
  return (
    <li
      className="flex cursor-pointer hover:border-[#D0D0D0]/60 flex-col border border-[#D0D0D0]/25 rounded-md p-4 relative"
      onClick={onSelect}
    >
      <div className="absolute top-3 right-3 flex gap-1 ">
        <button className="p-1 rounded-md bg-[#D0D0D0]/[0.05] cursor-pointer">
          <Image
            src="/download.svg"
            alt={`export character: ${selectItem.name}`}
            width={18}
            height={18}
          ></Image>
        </button>
        <button className="p-1 rounded-md bg-[#D0D0D0]/[0.05] cursor-pointer">
          <Image
            src="/trash.svg"
            alt={`delete character: ${selectItem.name}`}
            width={18}
            height={18}
          ></Image>
        </button>
      </div>
      <div className="flex">
        <div className="bg-[#D0D0D0]/[0.07] p-1.5 border rounded-lg border-[#D0D0D0]/25 ">
          <Image
            src="/alien.svg"
            alt={`avatar character: ${selectItem.name}`}
            width={32}
            height={32}
          ></Image>
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-lg font-semibold ">{selectItem.name}</span>
          <span className="text-xs text-[#6b6b6b] ">
            {selectItem.race} · {selectItem.class} 10ур.
          </span>
        </div>
      </div>
      <div className="flex text-xs mt-3">
        <span className="text-[#942727]">HP 43/45</span>
        <span className="text-[#125074] ml-5">КД 12</span>
      </div>
    </li>
  );
};
