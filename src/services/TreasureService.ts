import { api } from "./api";

interface TreasureResponse {
    gems: { name: string; quantity: number }[];
    arts: { name: string; quantity: number }[];
    itens: { name: string; quantity: number }[];
    po: number;
    pl: number;
    gemsPrice: number;
    artsPrice: number;
  }

export const TreasureService = {
  async getLoot(type: string, dice: number): Promise<TreasureResponse | null> {
    const response = await api.get<TreasureResponse | null>(`/treasurepile/${type}/roll/${dice}`);

    return response.data;
  }
};