import { getNaverBooks } from "@/api/naver_api";
const BookList = async ({ search }) => {
  // search 값만 전달
  const books = await getNaverBooks(search);
  const viewList = books.map((book) => <li>{book.title}</li>);

  return <ul>{viewList}</ul>;
};

export default BookList;
