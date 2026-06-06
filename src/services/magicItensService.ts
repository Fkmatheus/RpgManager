import type { magicItens } from './../types/MagicItens';
import { api } from "./api";

export const MagicItensService = {
  async getAllMagicItensA(): Promise<magicItens[]> {
    const response = await api.get<magicItens[]>("/unique/magicA");

    return response.data;
  },

  async rollA(dice: number) {
    const response = await api.get(`/magicA/roll/${dice}`);
    return response.data;
  },

  async searchA(id: number | undefined) {
    const response = await api.get(`/magicA/${id}`);
    return response.data;
  },

  async getAllMagicItensB(): Promise<magicItens[]> {
    const response = await api.get<magicItens[]>("/unique/magicB");

    return response.data;
  },

  async rollB(dice: number) {
    const response = await api.get(`/magicB/roll/${dice}`);
    return response.data;
  },

  async searchB(id: number | undefined) {
    const response = await api.get(`/magicB/${id}`);
    return response.data;
  },

  async getAllMagicItensC(): Promise<magicItens[]> {
    const response = await api.get<magicItens[]>("/unique/magicC");

    return response.data;
  },

  async rollC(dice: number) {
    const response = await api.get(`/magicC/roll/${dice}`);
    return response.data;
  },

  async searchC(id: number | undefined) {
    const response = await api.get(`/magicC/${id}`);
    return response.data;
  },

  async getAllMagicItensD(): Promise<magicItens[]> {
    const response = await api.get<magicItens[]>("/unique/magicD");

    return response.data;
  },

  async rollD(dice: number) {
    const response = await api.get(`/magicD/roll/${dice}`);
    return response.data;
  },

  async searchD(id: number | undefined) {
    const response = await api.get(`/magicD/${id}`);
    return response.data;
  },

  async getAllMagicItensE(): Promise<magicItens[]> {
    const response = await api.get<magicItens[]>("/unique/magicE");

    return response.data;
  },

  async rollE(dice: number) {
    const response = await api.get(`/magicE/roll/${dice}`);
    return response.data;
  },

  async searchE(id: number | undefined) {
    const response = await api.get(`/magicE/${id}`);
    return response.data;
  },

  async getAllMagicItensF(): Promise<magicItens[]> {
    const response = await api.get<magicItens[]>("/unique/magicF");

    return response.data;
  },

  async rollF(dice: number) {
    const response = await api.get(`/magicF/roll/${dice}`);
    return response.data;
  },

  async searchF(id: number | undefined) {
    const response = await api.get(`/magicF/${id}`);
    return response.data;
  },

  async getAllMagicItensG(): Promise<magicItens[]> {
    const response = await api.get<magicItens[]>("/unique/magicG");

    return response.data;
  },

  async rollG(dice: number) {
    const response = await api.get(`/magicG/roll/${dice}`);
    return response.data;
  },

  async searchG(id: number | undefined) {
    const response = await api.get(`/magicG/${id}`);
    return response.data;
  },

  async getAllMagicItensH(): Promise<magicItens[]> {
    const response = await api.get<magicItens[]>("/unique/magicH");

    return response.data;
  },

  async rollH(dice: number) {
    const response = await api.get(`/magicH/roll/${dice}`);
    return response.data;
  },

  async searchH(id: number | undefined) {
    const response = await api.get(`/magicH/${id}`);
    return response.data;
  },

  async getAllMagicItensI(): Promise<magicItens[]> {
    const response = await api.get<magicItens[]>("/unique/magicI");

    return response.data;
  },

  async rollI(dice: number) {
    const response = await api.get(`/magicI/roll/${dice}`);
    return response.data;
  },

  async searchI(id: number | undefined) {
    const response = await api.get(`/magicI/${id}`);
    return response.data;
  },

};