import { z } from "zod";
export const createNoteSchema = z.object({
  title: z.string().min(1, { message: "Title is required!" }),
  content: z.string().optional(),
});

export type CreateNoteSchema = z.infer<typeof createNoteSchema>;

export type NoteSchema = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  enabled: boolean;
  title: string;
  content?: string;
  userId: string;
};
