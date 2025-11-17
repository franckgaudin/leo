import { z } from "zod";

export const chatMessageSchema = z.object({
  id: z.string(),
  author: z.string(),
  role: z.enum(["user", "assistant"]),
  content: z.string(),
  timestamp: z.string(),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;
