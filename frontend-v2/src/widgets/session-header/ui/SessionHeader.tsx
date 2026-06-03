import Image from "next/image";

export const SessionHeader = () => {
  return (
    <header className="flex items-center py-6 px-7 border-b border-[#D0D0D0]/25">
      <button className="bg-[#D0D0D0]/[0.07] p-1.5 border rounded-lg border-[#D0D0D0]/25 cursor-pointer mr-3">
        <Image
          src="/left.svg"
          alt="close sidebar"
          width={24}
          height={24}
        ></Image>
      </button>
      <span className="flex">
        <h2 className=" text-2xl font-bold mr-2">Нулевой протокол</h2>
        <h3 className="text-2xl font-bold text-[#bbbbbbc0]">
          · Аэрин Бескрайний
        </h3>
      </span>
      <button className="bg-[#D0D0D0]/[0.07] p-1.5 border rounded-lg border-[#D0D0D0]/25 cursor-pointer ml-auto flex items-center px-4 py-2">
        <Image
          src="/character.svg"
          alt="character"
          width={20}
          height={20}
        ></Image>
        <span className="ml-2">Персонаж</span>
      </button>
    </header>
  );
};
