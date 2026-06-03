import Image from "next/image";

export const CampaignListItem = () => {
  return (
    <li className="flex p-3 rounded-lg bg-[#D0D0D0]/[0.07] border border-[#D0D0D0]/25">
      <Image
        src="/mapIcon.svg"
        alt="session"
        width={20}
        height={20}
        className="mr-2"
      ></Image>
      <div className="flex flex-col">
        <span className="font-bold">
          Эребор{" "}
          <span className="font-normal text-[#bebebe]">| Аэрин Бескрайний</span>
        </span>
        <span className="text-sm text-[#6b6b6b]">
          Катакомбы Серого Замка · 19:42
        </span>
      </div>
    </li>
  );
};
