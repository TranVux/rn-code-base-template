import { instance } from "@/services/instance";

export default async (id: number) => {
  return instance.get(`users/${id}`).json<IUser>();
};
