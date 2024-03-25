"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const PRODUCT = prisma.tbl_product;

export const findByPName = async (pname) => {
  const result = await PRODUCT.findMany({
    where: {
      //   contains: { p_name: pname },
      p_name: { contains: pname },
    },
  });
  console.log("검색결과 : ", result);
  return result;
};
