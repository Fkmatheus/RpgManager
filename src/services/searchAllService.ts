import type { artObj } from "../types/ArtObj";
import type { Gem } from "../types/Gem";
import type { magicItens } from "../types/MagicItens";
import { api } from "./api";

export const SearchAllService = {
  async findGemByName(gem: string): Promise<Gem> {
    const response = await api.get<Gem>(`/searchAll/gem/${gem}`);

    return response.data;
  },

  async findObjByName(obj: string): Promise<artObj> {
    const response = await api.get<artObj>(`/searchAll/obj/${obj}`);

    return response.data;
  },

  async findItemByName(item: string): Promise<magicItens> {
    const response = await api.get<magicItens>(`/searchAll/gem/${item}`);

    return response.data;
  }
};