import { API_URL } from "@/src/shared/config/api";

export const getWorld = async () => {
  const res = await fetch(`${API_URL}/worlds`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};
