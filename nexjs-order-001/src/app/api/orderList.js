"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findBynum = async (c_code) => {
  const result = await prisma.tbl_customer.findMany({
    where: {
      c_code,
    },
  });
  console.log(result[0]);
  return result;
};
