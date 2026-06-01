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
        <main className="ml-[360px] flex flex-col h-full">
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
          <div className="px-7 py-7 bg-[#181818] flex flex-col gap-6 h-full">
            <div className="max-w-[70%] flex items-start mb-4 self-start relative">
              <div className="bg-[#D0D0D0]/[0.07] p-1.5 border rounded-lg border-[#D0D0D0]/25 mr-2.5 absolute">
                <Image
                  src="/masterAvatar.svg"
                  alt="avatar master"
                  width={24}
                  height={24}
                ></Image>
              </div>
              <div className="ml-14">
                <span className="uppercase text-[#6b6b6b] font-bold">
                  Мастер подземелий
                </span>
                <div className="px-4 py-3 text-[#E8E8E8] rounded-lg bg-[#202020] border border-[#FFFFFF]/[0.08] border-l-2 border-l-[#C8C8C8]/45 mt-2">
                  Тьма давит со всех сторон. Факел Торина бросает дрожащие тени
                  на стены, покрытые мхом и старыми рунами. Где-то впереди —
                  скрип, словно что-то тяжёлое волочится по камню.
                  <br></br>
                  <br></br> Развилка. Левый коридор уходит вниз — оттуда тянет
                  холодом и запахом гнили. Правый ведёт к слабому голубоватому
                  свечению.
                  <br></br>
                  <br></br>
                  Что вы делаете?
                </div>
                <div className="mt-2 text-sm text-[#6b6b6b] flex items-center">
                  <Image
                    className="relative -top-px"
                    src="/geo.svg"
                    alt="geo svg"
                    width={12}
                    height={12}
                  ></Image>
                  <span className="mx-2">Катакомбы Серого Замка</span>
                  <span className="mr-2">·</span>
                  <Image
                    src="/clock.svg"
                    alt="time svg"
                    width={12}
                    height={12}
                    className="relative -top-px"
                  ></Image>
                  <span className="ml-2">13:08</span>
                </div>
              </div>
            </div>
            <div className="max-w-[70%] flex items-start self-end flex-row-reverse relative">
              <div className="bg-[#D0D0D0]/[0.07] p-1.5 border rounded-lg border-[#D0D0D0]/25 mr-2.5 absolute">
                <Image
                  src="/alien.svg"
                  alt="avatar gamer"
                  width={24}
                  height={24}
                ></Image>
              </div>
              <div className="mr-17 text-right">
                <span className="uppercase text-[#6b6b6b] font-bold ">
                  Аэрин Серебряный
                </span>
                <div className="px-4 py-3 text-[#E8E8E8] rounded-lg bg-[#202020] border border-[#FFFFFF]/[0.08] border-r-2 border-r-[#C8C8C8]/45 mt-2 text-left">
                  Достаю жезл обнаружения магии и провожу ритуал — хочу понять,
                  откуда исходит то синеватое свечение справа.
                </div>
                <div className="mt-2 text-sm text-[#6b6b6b] flex items-center justify-end">
                  <Image
                    className="relative -top-px"
                    src="/geo.svg"
                    alt="geo svg"
                    width={12}
                    height={12}
                  ></Image>
                  <span className="mx-2">Катакомбы Серого Замка</span>
                  <span className="mr-2">·</span>
                  <Image
                    src="/clock.svg"
                    alt="time svg"
                    width={12}
                    height={12}
                    className="relative -top-px"
                  ></Image>
                  <span className="ml-2">13:08</span>
                </div>
              </div>
            </div>
          </div>
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
        </main>
      </div>
    </>
  );
}
