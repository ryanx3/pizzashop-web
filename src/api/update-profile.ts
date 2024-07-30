import { api } from "@/lib/axios";

interface updateProfileResponse {
  name: string;
  description: string | null
}

export async function updateProfile({
  name,
  description,
}: updateProfileResponse) {
  await api.put("/profile", { name, description });
}
