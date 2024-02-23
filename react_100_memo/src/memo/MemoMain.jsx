import { useState } from "react";
import "../css/MemoMain.css";
import MemoSection from "./MemoSection";

const MemoMain = () => {
  const [memoItem, setMemoItem] = useState("");
  const memoChange = () => {
    setMemoItem();
  };
  const memoInsert = () => {};

  return (
    <>
      <header className="Header">
        <h1>오늘은 내 생의 가장 젊은날</h1>
      </header>
      <section>
        <h1>
          <MemoSection memoItem={memoItem} setMemoItem={setMemoItem} memoChange={memoChange} memoInsert={memoInsert}></MemoSection>
        </h1>
      </section>

      <footer>
        <address>CoptRight &copy; n96js@naver.com</address>
      </footer>
    </>
  );
};

export default MemoMain;
