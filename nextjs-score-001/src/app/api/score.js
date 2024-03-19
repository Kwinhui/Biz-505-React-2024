"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findByStNum = async (st_num) => {
  try {
    const result = await prisma.tbl_score.findMany({
      where: { s_stnum: st_num },
    });
    // disconnect를 해주지 않으면 계속 열려있기때문에 닫아줘야함
    prisma.$disconnect;
    return result;
  } catch (error) {
    console.error(error);
    prisma.$disconnect;
  }
};
