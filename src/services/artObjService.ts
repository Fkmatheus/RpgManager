import { api } from "./api";
import type { artObj } from "../types/ArtObj"

export const ObjArtService = {
  async getAll25Po(): Promise<artObj[]> {
    const response = await api.get<artObj[]>("/art25");

    return response.data;
  },

  async roll25(dice: number) {
    const response = await api.get(`/art25/roll/${dice}`);
    return response.data;
  },

  async search25(id: number | undefined) {
    const response = await api.get(`/art25/${id}`);
    return response.data;
  },

  async getAll250Po(): Promise<artObj[]> {
    const response = await api.get<artObj[]>("/art250");

    return response.data;
  },

  async roll250(dice: number) {
    const response = await api.get(`/art250/roll/${dice}`);
    return response.data;
  },

  async search250(id: number | undefined) {
    const response = await api.get(`/art250/${id}`);
    return response.data;
  },

  async getAll750Po(): Promise<artObj[]> {
    const response = await api.get<artObj[]>("/art750");

    return response.data;
  },

  async roll750(dice: number) {
    const response = await api.get(`/art750/roll/${dice}`);
    return response.data;
  },

  async search750(id: number | undefined) {
    const response = await api.get(`/art750/${id}`);
    return response.data;
  },

  async getAll2500Po(): Promise<artObj[]> {
    const response = await api.get<artObj[]>("/art2500");

    return response.data;
  },

  async roll2500(dice: number) {
    const response = await api.get(`/art2500/roll/${dice}`);
    return response.data;
  },

  async search2500(id: number | undefined) {
    const response = await api.get(`/art2500/${id}`);
    return response.data;
  },

  async getAll7500Po(): Promise<artObj[]> {
    const response = await api.get<artObj[]>("/art7500");

    return response.data;
  },

  async roll7500(dice: number) {
    const response = await api.get(`/art7500/roll/${dice}`);
    return response.data;
  },

  async search7500(id: number | undefined) {
    const response = await api.get(`/art7500/${id}`);
    return response.data;
  },

};