import { API_URL } from "@/src/shared/config/api";

export const getCharacter = async () => {
  const res = await fetch(`${API_URL}/characters`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};
