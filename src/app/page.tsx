import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { delay, motion } from "framer-motion";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const page = async () => {
  const { userId } = await auth();
  if (userId) redirect("/notes");
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-5">
      <div className="flex items-center gap-4 ">
        <Image
          src={logo}
          alt="Flow brain"
          width={100}
          height={100}
          priority={true}
        />
        <span className="font-extrabold tracking-tight text-4xl lg:text-5xl">
          Flow Brain
        </span>
      </div>
      <p className="max-w-prose text-center">
        An Intelligent Note taking Applicaiton with AI Integration , built with
        OpenAI and pinecone,Nextjs, Shadcn,Clerk Authentication. Enjoy your
        Development with these cool technologies even more than the past...
      </p>
      <div>
        <Button size={"lg"} asChild>
          <Link href={"/notes"}>Open</Link>
        </Button>
      </div>
    </main>
  );
};

export default page;
