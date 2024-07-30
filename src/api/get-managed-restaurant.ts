import { api } from "@/lib/axios";

export interface GetManagedRestauntResponse {
  id: string;
  name: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export async function getManagedRestaunt() {
  const response = await api.get<GetManagedRestauntResponse>("/managed-restaurant");
  return response.data;
}
