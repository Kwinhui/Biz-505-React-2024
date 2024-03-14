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
    <article className="book main">
      <aside className="book list">
        <BookSearch search={search} setSearch={setSearch} />
        <BookList search={search} setIsbn={setIsbn} />
      </aside>
      <aside className="book detail">
        {/*
         조건부 Rendering
         isbn state 값이 "" 또는 null 등이 아니면 BookDetail 을
         화면에 표현하라
         */}
        {isbn && <BookDetail isbn={isbn} />}
      </aside>
    </article>
  );
};

export default BookMain;
