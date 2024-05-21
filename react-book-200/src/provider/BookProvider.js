import { createContext, useContext, useEffect, useState } from "react";

const BookContext = createContext();

const useBookContext = () => {
  return useContext(BookContext);
};

const BookContextProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const bookFetch = async () => {
      const res = await fetch("/naver/books/java");
      const json = await res.json();
      setBookList([...json]);
    };
    bookFetch();
  }, []);

  return <BookContext.Provider value={{ bookList }}>{children}</BookContext.Provider>;
};

export { BookContextProvider, useBookContext };
