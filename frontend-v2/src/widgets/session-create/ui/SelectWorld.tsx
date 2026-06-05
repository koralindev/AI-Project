import Image from "next/image";

type SelectWorldProps = {
  selectItem: {
    name: string;
  };
  setStep: (step: "world" | "character" | "") => void;
};

export const SelectWorld = ({ selectItem, setStep }: SelectWorldProps) => {
  return (
    <li
      className="flex cursor-pointer hover:border-[#D0D0D0]/60 flex-col border border-[#D0D0D0]/25 rounded-md p-4 relative"
      onClick={() => setStep("world")}
    >
      <div className="absolute top-3 right-3 flex gap-1 ">
        <button className="p-1 rounded-md bg-[#D0D0D0]/[0.05] cursor-pointer">
          <Image
            src="/download.svg"
            alt={`export world: ${selectItem.name}`}
            width={18}
            height={18}
          ></Image>
        </button>
        <button className="p-1 rounded-md bg-[#D0D0D0]/[0.05] cursor-pointer">
          <Image
            src="/trash.svg"
            alt={`delete world: ${selectItem.name}`}
            width={18}
            height={18}
          ></Image>
        </button>
      </div>
      <Image
        src="/world.svg"
        alt={`world: ${selectItem.name}`}
        width={32}
        height={32}
      ></Image>
      <span className="text-lg font-semibold mt-1">{selectItem.name}</span>
      <span className="text-sm mt-1">Темное фентези</span>
      <span className="text-xs text-[#6b6b6b] mt-2">
        Мир под вечным серым небом, где боги умерли, а их кости стали горами.
      </span>
    </li>
  );
};
