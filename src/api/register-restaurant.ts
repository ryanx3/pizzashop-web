import { api } from "@/lib/axios";

export interface RegisterRestauntBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaunt({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisterRestauntBody) {
  await api.post("/restaurants", { email, managerName, phone, restaurantName });
}
