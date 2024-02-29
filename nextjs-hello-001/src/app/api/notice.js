import { PrismaClient } from "@prisma/client";
const DB = new PrismaClient();

const selectAll = async () => {
  try {
    const notice = await DB.tbl_notice.findMany();
    await DB.$disconnect();
    return notice;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createNotice = async (data) => {
  console.log(data);
  // 전달받은 data 를 data에 넣어서 create 해라
  await DB.tbl_notice.create({ data: data });
};

export { createNotice };
export { selectAll };
