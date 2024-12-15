import prisma from "@/lib/db/prisma";
import { createNoteSchema } from "@/lib/validation/note";
import { auth } from "@clerk/nextjs/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const parseResult = createNoteSchema.safeParse(body);

    if (!parseResult.success) {
      console.error(parseResult);
      return new Response(JSON.stringify({ message: "Invalid Input" }), {
        status: 400,
      });
    }

    const { content, title } = parseResult.data;
    const { userId } = await auth();
    if (!userId) {
      return new Response(
        JSON.stringify({ message: "User should be logged In" }),
        { status: 401 },
      );
    }
    //now we have a valid user data
    //we can create a new Note
    const note = await prisma.note.create({
      data: {
        title,
        content,
        userId,
      },
    });
    return new Response(JSON.stringify(note), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Internal Server error" }), {
      status: 500,
    });
  }
};

export async function GET(request: Request) {
  try {
    const userId = await auth();
    console.log("USER ID =>>>>", userId.toString());
    if (!userId) {
      return new Response(
        JSON.stringify({ message: "User Must be logged In" }),
        { status: 401 },
      );
    }

    const allNotes = await prisma.note.findMany({
      where: {
        userId: userId.toString(),
      },
    });

    console.log(allNotes);
    return new Response(JSON.stringify(allNotes), { status: 200 });
  } catch (error) {}
}
