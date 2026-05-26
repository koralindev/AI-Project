import Image from "next/image";

export default function Home() {
  return (
    <>
      <aside className="flex flex-col w-[260px] py-6 px-7">
        <div className="flex items-center -mx-7 px-7 pb-4 mb-4 border-b border-[#D0D0D0]/25">
          <div className="bg-[#D0D0D0]/[0.07] p-1.5 border rounded-lg border-[#D0D0D0]/25 mr-2.5">
            <Image
              src="/logo.svg"
              alt="RPG Engine logo"
              width={18}
              height={18}
            />
          </div>
          <h1 className="font-display text-lg font-bold">RPG Engine</h1>
        </div>
        <button className="flex font-bold items-center border rounded-lg border-[#D0D0D0]/22 py-2 px-6 cursor-pointer">
          <Image
            src="/plus.svg"
            alt="add session"
            width={20}
            height={20}
            className="mr-2"
          ></Image>
          Новая сессия
        </button>

        <nav>
          <span>Кампании</span>
          <ul>
            <li>
              <span>Эребор | Аэрин Бескрайний</span>
              <span>Катакомбы Серого Замка | 19:42</span>
            </li>
            <li>
              <span>Эребор | Аэрин Бескрайний</span>
              <span>Катакомбы Серого Замка | 20:15</span>
            </li>
          </ul>
        </nav>

        <div>
          <button>Настройки</button>
          <div>
            <div></div>
            <div>
              <span>Путник</span>
            </div>
          </div>
        </div>
      </aside>

      {/* <main>
        <header>
          <button>X</button>
          <h2>Нулевой протокол</h2>
          <h3>Аэрин Бескрайний</h3>
          <button>Персонаж</button>
        </header>
      </main> */}
    </>
  );
}
