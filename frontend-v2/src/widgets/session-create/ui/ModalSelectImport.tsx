import Image from "next/image";

type ModalSelectImportProps = {
  step: "" | "world" | "character";
};

export const ModalSelectImport = ({ step }: ModalSelectImportProps) => {
  const isWorld = step === "world";
  const isEmpty = step === "";

  return (
    <li
      className="flex items-center justify-center gap-2 cursor-pointer text-[#6b6b6b] hover:border-[#D0D0D0]/60 flex-col
     border border-dashed border-[#D0D0D0]/25 rounded-md p-4"
    >
      <Image src="/upload.svg" alt="upload" width={22} height={22}></Image>
      <span>{isEmpty ? "Импорт мира" : isWorld ? "Импорт персонажа" : ""}</span>
    </li>
  );
};
