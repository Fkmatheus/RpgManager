import { api } from "./api";
import type { SpellCardProps } from "../types/Spells";

export const SpellsService = {
  async getAllSpells(): Promise<SpellCardProps[]> {
    const response = await api.get<SpellCardProps[]>("/magicSpells");

    return response.data;
  },

};