import Image from "next/image";

export default function Home() {
  return (
    <>
      <aside className="flex flex-col w-[360px] py-6 px-7 h-screen border-r border-[#D0D0D0]/25 fixed left-0 top-0">
        <div className="flex items-center -mx-7 px-7 pb-7 mb-6 border-b border-[#D0D0D0]/25">
          <div className="bg-[#D0D0D0]/[0.07] p-1.5 border rounded-lg border-[#D0D0D0]/25 mr-2.5">
            <Image
              src="/logo.svg"
              alt="RPG Engine logo"
              width={24}
              height={24}
            />
          </div>
          <h1 className="font-display text-3xl font-bold">RPG Engine</h1>
        </div>
        <button className="flex justify-center font-bold items-center border-2 rounded-lg border-[#D0D0D0]/22 py-2 px-6 cursor-pointer">
          <Image
            src="/plus.svg"
            alt="add session"
            width={18}
            height={18}
            className="mr-2"
          ></Image>
          Новая сессия
        </button>
        <nav className="mt-5">
          <span className="text-sm text-[#9b9b9b] tracking-[1.8px]">
            КАМПАНИИ
          </span>
          <ul className="flex gap-1 mt-2 flex-col">
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
                  <span className="font-normal text-[#bebebe]">
                    | Аэрин Бескрайний
                  </span>
                </span>
                <span className="text-sm text-[#6b6b6b]">
                  Катакомбы Серого Замка · 19:42
                </span>
              </div>
            </li>
            <li className="flex p-3">
              <Image
                src="/mapIcon.svg"
                alt="session"
                width={20}
                height={20}
                className="mr-2"
              ></Image>
              <div className="flex flex-col">
                <span className="font-bold">
                  Эребор
                  <span className="font-normal text-[#bebebe]">
                    | Аэрин Бескрайний
                  </span>
                </span>
                <span className="text-sm text-[#6b6b6b]">
                  Катакомбы Серого Замка · 19:42
                </span>
              </div>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <Image src="/liner.png" alt="line" width={400} height={30}></Image>
          <button className="flex justify-center items-center rounded-lg mt-5">
            <div className="bg-[#D0D0D0]/[0.07] p-1.5 border rounded-lg border-[#D0D0D0]/25">
              <Image
                src="/setting.svg"
                alt="setting"
                width={20}
                height={20}
              ></Image>
            </div>
            <span className="ml-2">Настройки</span>
          </button>
          <div>
            <div className="flex items-center mt-4 ">
              <div className="bg-[#D0D0D0]/[0.07] p-1.5 border rounded-lg border-[#D0D0D0]/25">
                <Image
                  src="/user.svg"
                  alt="profile"
                  width={20}
                  height={20}
                ></Image>
              </div>
              <span className="ml-2">Путник</span>
            </div>
          </div>
        </div>
      </aside>
      <div className="w-screen h-screen ">
        <main className="ml-[360px]">
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
          <div className="px-7 py-6"></div>
        </main>
      </div>
    </>
  );
}
