import prisma from "@/lib/db/prisma";
import { fetchAllNotes } from "@/utils/request";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";

export const metdata: Metadata = {
  title: "Flow Brain - Notes",
};
export default async function NotesPage() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User Id Undefined");
  }
  const notes = await fetchAllNotes();

  return <div>{JSON.stringify(notes)}</div>;
}
