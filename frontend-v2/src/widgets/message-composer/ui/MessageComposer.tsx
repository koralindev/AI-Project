import Image from "next/image";

export const MessageComposer = () => {
  return (
    <footer className="px-7 py-4  mt-auto flex flex-col">
      <div className="flex">
        <input
          placeholder="Опишите свое действие..."
          className="w-full py-2 px-7 border rounded-lg border-[#FFFFFF]/[0.07] bg-[#202020] text-[#E8E8E8] focus:outline-none"
        />
        <button className="bg-[#D0D0D0]/[0.07] p-2 border rounded-lg border-[#D0D0D0]/25 ml-2.5 cursor-pointer">
          <Image
            src="/send.svg"
            alt="send message"
            width={24}
            height={24}
            className="relative -top-px"
          ></Image>
        </button>
      </div>
      <span className="text-sm text-[#6b6b6b] mt-2 self-center">
        Enter — отправить · Shift+Enter — новая строка
      </span>
    </footer>
  );
};
