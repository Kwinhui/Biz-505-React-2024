"use client";
import { useState } from "react";
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./BookMain.css";

const BookMain = () => {
  // inputbox에 값이 입력되는걸 감시하는 state
  // call by name
  const [search, setSearch] = useState("");
  const [isbn, setIsbn] = useState("");
  return (
    <section className="book main">
      <BookSearch search={search} setSearch={setSearch} />
      <article className="book body">
        <aside className="book list">
          <BookList search={search} setIsbn={setIsbn} />
        </aside>
        <aside className="book detail">
          <BookDetail isbn={isbn} />
        </aside>
      </article>
    </section>
  );
};

export default BookMain;
