import { object, string } from "valibot";

export const userSchema = object({
  name: string(),
});
