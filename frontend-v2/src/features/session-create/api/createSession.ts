import { API_URL } from "@/src/shared/config/api";

export const createSession = async ({
  worldId,
  characterId,
}: {
  worldId: string;
  characterId: string;
}) => {
  const res = await fetch(`${API_URL}/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ world_uid: worldId, character_id: characterId }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.detail ?? `HTTP ${res.status}`);
  }
  return res.json();
};
