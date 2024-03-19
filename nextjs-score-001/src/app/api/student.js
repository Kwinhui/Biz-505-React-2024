"use server";
import { PrismaClient } from "@prisma/client";
// 자동으로 모델이랑 연결해줌
const prisma = new PrismaClient();
// prisma 를 이용해 db 연결하기 위한 준비

// selectAll 을 다른곳에서 import 할수있도록 export
export const selectAll = async () => {
  try {
    // 전체데이터 가져와(fetch)
    const result = await prisma.tbl_student.findMany();
    // console.log(result);
    // disconnect를 해주지 않으면 계속 열려있기때문에 닫아줘야함
    prisma.$disconnect;
    return result;
  } catch (error) {
    console.error(error);
    prisma.$disconnect;
  }
};
