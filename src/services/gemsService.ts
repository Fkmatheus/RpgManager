import { api } from "./api";
import type { Gem } from "../types/Gem"

export const GemsService = {
  async getAll10Po(): Promise<Gem[]> {
    const response = await api.get<Gem[]>("/gems10");

    return response.data;
  },

  async roll10(dice: number) {
    const response = await api.get(`/gems10/roll/${dice}`);
    return response.data;
  },
  
  async search10(id: number | undefined) {
    const response = await api.get(`/gems10/${id}`);
    return response.data;
  },

  async search10ByName(name: string | undefined) {
    const response = await api.get(`/searchByName/gems10/${name}`);
    return response.data;
  },

  async getAll50Po(): Promise<Gem[]> {
    const response = await api.get<Gem[]>("/gems50");

    return response.data;
  },

  async roll50(dice: number) {
    const response = await api.get(`/gems50/roll/${dice}`);
    return response.data;
  },

  async search50(id: number | undefined) {
    const response = await api.get(`/gems50/${id}`);
    return response.data;
  },

  async search50ByName(name: string | undefined) {
    const response = await api.get(`/searchByName/gems50/${name}`);
    return response.data;
  },

  async getAll100Po(): Promise<Gem[]> {
    const response = await api.get<Gem[]>("/gems100");

    return response.data;
  },

  async roll100(dice: number) {
    const response = await api.get(`/gems100/roll/${dice}`);
    return response.data;
  },

  async search100(id: number | undefined) {
    const response = await api.get(`/gems100/${id}`);
    return response.data;
  },

  async search100ByName(name: string | undefined) {
    const response = await api.get(`/searchByName/gems100/${name}`);
    return response.data;
  },

  async getAll500Po(): Promise<Gem[]> {
    const response = await api.get<Gem[]>("/gems500");

    return response.data;
  },

  async roll500(dice: number) {
    const response = await api.get(`/gems500/roll/${dice}`);
    return response.data;
  },

  async search500(id: number | undefined) {
    const response = await api.get(`/gems500/${id}`);
    return response.data;
  },

  async search500ByName(name: string | undefined) {
    const response = await api.get(`/searchByName/gems500/${name}`);
    return response.data;
  },

  async getAll1000Po(): Promise<Gem[]> {
    const response = await api.get<Gem[]>("/gems1000");

    return response.data;
  },

  async roll1000(dice: number) {
    const response = await api.get(`/gems1000/roll/${dice}`);
    return response.data;
  },

  async search1000(id: number | undefined) {
    const response = await api.get(`/gems1000/${id}`);
    return response.data;
  },

  async search1000ByName(name: string | undefined) {
    const response = await api.get(`/searchByName/gems1000/${name}`);
    return response.data;
  },

  async getAll5000Po(): Promise<Gem[]> {
    const response = await api.get<Gem[]>("/gems5000");

    return response.data;
  },

  async roll5000(dice: number) {
    const response = await api.get(`/gems5000/roll/${dice}`);
    return response.data;
  },

  async search5000(id: number | undefined) {
    const response = await api.get(`/gems5000/${id}`);
    return response.data;
  },

  async search5000ByName(name: string | undefined) {
    const response = await api.get(`/searchByName/gems5000/${name}`);
    return response.data;
  },
};