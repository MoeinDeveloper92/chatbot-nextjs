import { PrismaClient } from "@prisma/client";

const prismaClientSingletong = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingletong>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingletong();

export default prisma;
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

//this code create a Prisma client
