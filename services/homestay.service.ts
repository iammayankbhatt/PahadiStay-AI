import api from "@/lib/api";
import { Homestay } from "@/types/homestay";

export async function getHomestays(): Promise<Homestay[]> {
  const response = await api.get("/homestays");
  return response.data;
}

export async function getHomestay(id: number): Promise<Homestay> {
  const response = await api.get(`/homestays/${id}`);
  return response.data;
}