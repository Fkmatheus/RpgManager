import { api } from "./api";
import type { SpellCardProps } from "../types/Spells";

export const SpellsService = {
  async getAllSpells(): Promise<SpellCardProps[]> {
    const response = await api.get<SpellCardProps[]>("/magicSpells");

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