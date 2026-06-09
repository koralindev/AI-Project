type ModalHeaderProps = {
  step: "world" | "character" | "";
};

export const ModalHeader = ({ step }: ModalHeaderProps) => {
  const isWorld = step === "world";
  const isEmpty = step === "";

  return (
    <>
      <h2 className="text-xl font-bold">
        {isEmpty ? "Выберите мир" : isWorld ? "Выберите персонажа" : ""}
      </h2>
      <span className="text-sm text-gray-400 mt-1">
        {isEmpty
          ? "Шаг 1 из 2 — Место действия"
          : isWorld
            ? "Шаг 2 из 2 — Ваш герой"
            : ""}
      </span>
    </>
  );
};
