import { api } from "./api";
import type { SpellCardProps } from "../types/Spells";

export const SpellsService = {
  async getAllSpells(filters: any): Promise<SpellCardProps[]> {
    const response = await api.get<SpellCardProps[]>("/magicSpells", {
      params: filters
    });

    return response.data;
  },

  async createSpell(spell: SpellCardProps): Promise<SpellCardProps> {
    console.log(spell);
    const response = await api.post<SpellCardProps>(
      "/magicSpells/create",
      spell,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response);

    return response.data;
  },

};