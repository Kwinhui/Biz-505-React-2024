"use client";
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import "./BookMain.css";
import BookDetail from "./BookDetail";
// useEffect 데이터를 감시하고있다가 변화가있으면 이벤트
import { useState, useEffect } from "react";
export default () => {
  const [search, setSearch] = useState("");
  const [bookList, setBookList] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`/api/get?search=${search}`);

      const books = await response.json();
      setBookList([...books]);
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * useEffect() 는 CSR(Client Side Rendering) 컴포넌트에서
   * 특정한 state 변수를 감시하고 있다가,
   * state 변수의 변화가 생기면 event 를 일으키고 내부의 코드를 실행한다.
   *
   * useEffect() 에 state([]) 를 공백으로 두면
   * 현재 component 가 화면에 mount 되었을때 한번 event 를 발생하고
   * 내부의 코드를 실행한다.
   */
  useEffect(() => {
    fetchBooks();
  }, [search]);
  // 화면이 rendering 될때 자동으로 함수 실행
  // [useState]가 있으면 변화가 있으면 실행
  return (
    <section>
      <BookSearch search={search} setSearch={setSearch} />
      <article className="body">
        <BookList bookList={bookList} />
        <BookDetail />
      </article>
    </section>
  );
};
