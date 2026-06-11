type ModalHeaderProps = {
  step: "world" | "character";
};

export const ModalHeader = ({ step }: ModalHeaderProps) => {
  const isWorld = step === "world";

  return (
    <>
      <h2 className="text-xl font-bold">
        {isWorld ? "Выберите мир" : "Выберите персонажа"}
      </h2>
      <span className="text-sm text-gray-400 mt-1">
        {isWorld ? "Шаг 1 из 2 — Место действия" : "Шаг 2 из 2 — Ваш герой"}
      </span>
    </>
  );
};
