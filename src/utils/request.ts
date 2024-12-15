import { CreateNoteSchema, NoteSchema } from "@/lib/validation/note";
export const fetchAllNotes = async (): Promise<NoteSchema[]> => {
  try {
    const res = await fetch("http://localhost:3000/api/notes");
    console.log(res);
    if (res.status === 200) {
      const data: NoteSchema[] = await res.json();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return []; // Add this return statement to satisfy the return type
  }
};

export const createNote = async (
  createNoteDto: CreateNoteSchema,
): Promise<NoteSchema | undefined> => {
  try {
    const res = await fetch("http://localhost:3000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createNoteDto),
    });
    if (res.status === 201) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
