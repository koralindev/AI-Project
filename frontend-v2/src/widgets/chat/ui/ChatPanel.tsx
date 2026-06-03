import { ChatMessage } from "./ChatMessage";

export const ChatPanel = () => {
  return (
    <div className="px-7 py-7 bg-[#181818] flex flex-col gap-6 h-full">
      <ChatMessage
        sender="master"
        msg="            Достаю жезл обнаружения магии и провожу ритуал — хочу понять, откуда
            исходит то синеватое свечение справа."
        avatar="/masterAvatar.svg"
        geo="Катакомбы Серого Замка"
        time="13:08"
      />
      <ChatMessage
        sender="Аэрин Серебряный"
        msg="            Достаю жезл обнаружения магии и провожу ритуал — хочу понять, откуда
            исходит то синеватое свечение справа."
        avatar="/alien.svg"
        geo="Катакомбы Серого Замка"
        time="13:08"
      />
    </div>
  );
};
