import Image from "next/image";

type ChatMessageProps = {
  sender: string;
  msg: string;
  avatar: string;
  geo: string;
  time: string;
};

export const ChatMessage = ({
  sender,
  msg,
  avatar,
  geo,
  time,
}: ChatMessageProps) => {
  const isMaster = sender === "master";

  return (
    <div
      className={`max-w-[70%] flex items-start relative ${isMaster ? "self-start mb-4" : "self-end flex-row-reverse"}`}
    >
      <div className="bg-[#D0D0D0]/[0.07] p-1.5 border rounded-lg border-[#D0D0D0]/25 mr-2.5 absolute">
        <Image
          src={avatar}
          alt={`avatar ${sender}`}
          width={24}
          height={24}
        ></Image>
      </div>
      <div className={`${isMaster ? "ml-14" : "mr-17 text-right"}`}>
        <span className="uppercase text-[#6b6b6b] font-bold">
          {isMaster ? "Мастер подземелья" : sender}
        </span>
        <div
          className={`px-4 py-3 text-[#E8E8E8] rounded-lg bg-[#202020] border border-[#FFFFFF]/8 border-l-2 border-l-[#C8C8C8]/45 mt-2 ${isMaster ? "" : "text-left"}`}
        >
          {msg}
        </div>
        <div
          className={`mt-2 text-sm text-[#6b6b6b] flex items-center ${isMaster ? "" : 'justify-end"'}`}
        >
          <Image
            className="relative -top-px"
            src="/geo.svg"
            alt="geo svg"
            width={12}
            height={12}
          ></Image>
          <span className="mx-2">{geo}</span>
          <span className="mr-2">·</span>
          <Image
            src="/clock.svg"
            alt="time svg"
            width={12}
            height={12}
            className="relative -top-px"
          ></Image>
          <span className="ml-2">{time}</span>
        </div>
      </div>
    </div>
  );
};
