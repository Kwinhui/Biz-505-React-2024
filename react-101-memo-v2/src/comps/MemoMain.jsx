import styles from "../css/MemoMain.module.css";
import "../css/Memo.css";
import MemoMainLeft from "./MemoMainLeft";
import MemoMainRight from "./MemoMainRight";
import uuid from "react-uuid";

// MemoLeft, MemoRight 에서 import 할 컴포넌트를 Main 에서 import 하고
// MemoLeft, MemoRight 의 children 으로 보내서 컴포넌트를 합성하기
import MemoDate from "./MemoDate";
import MemoList from "./MemoList";
import MemoInput from "./MemoInput";
import { useState, useEffect } from "react";
import MemoItem from "./MemoItem";

const MemoMain = () => {
  const [memoItem, setMemoItem] = useState("");
  const [memoList, setMemoList] = useState(() => {
    return localStorage.getItem("memoList") ? JSON.parse(localStorage.getItem("memoList")) : [];
  });
  const memoInsert = () => {
    const newMemoList = [...memoList, { seq: uuid(), memo: memoItem }];
    setMemoList(newMemoList);
  };
  const saveStorage = () => {
    localStorage.setItem("memoList", JSON.stringify(memoList));
  };
  const viewList = memoList.map((item) => <MemoItem item={item} key={item.seq} />);

  useEffect(saveStorage, [memoList]);
  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <MemoMainLeft>
          <MemoDate />
          <MemoList memoList={memoList} viewList={viewList} />
        </MemoMainLeft>
      </div>
      <div className={styles.aside}>
        <MemoMainRight>
          <MemoInput memoItem={memoItem} setMemoItem={setMemoItem} memoInsert={memoInsert} />
        </MemoMainRight>
      </div>
    </div>
  );
};

export default MemoMain;
