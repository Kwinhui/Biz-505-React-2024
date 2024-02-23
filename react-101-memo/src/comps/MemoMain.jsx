import styles from "../css/MemoMain.module.css";
import "../css/Memo.css";
import MemoMainLeft from "./MemoMainLeft";
import MemoMainRight from "./MemoMainRight";

// MemoLeft, MemoRight 에서 import 할 컴포넌트를 Main 에서 import 하고
// MemoLeft, MemoRight 의 children 으로 보내서 컴포넌트를 합성하기
import MemoDate from "./MemoDate";
import MemoList from "./MemoList";
import MemoItem from "./MemoItem";
import MemoInput from "./MemoInput";
import { useState } from "react";
import moment from "moment";
const MemoMain = () => {
  const [memo, setMemo] = useState({
    // JSON 객체를 이용해서
    // 메모 1개를 처리할 state

    m_seq: 0,
    m_id: "UUID",
    m_author: "n96js@naver.com",
    m_date: moment().format("YYYY-MM-DD"),
    m_time: moment().format("HH:mm:ss"),
    m_subject: "",
    m_memo: "",
    m_image: "",
  });
  // 메모 리스트를 처리할 state
  const [memoList, setMemoList] = useState([]);

  const memoInsert = () => {
    const newMemoList = [...memoList, { ...memo, m_date: moment().format("YYYY-MM-DD"), m_time: moment().format("HH:mm:ss") }];
    setMemoList([...newMemoList]);
    // 입력이 끝난 후 입력된 값 초기화 시키는 코드
    setMemo({ ...memo, m_date: moment().format("YYYY-MM-DD"), m_time: moment().format("HH:mm:ss"), m_subject: "", m_memo: "", m_image: "" });
  };
  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <MemoMainLeft>
          <MemoDate memo={memo} setMemo={setMemo} />
          <MemoList memoList={memoList} />
        </MemoMainLeft>
      </div>
      <div className={styles.aside}>
        <MemoMainRight>
          <MemoInput memo={memo} setMemo={setMemo} memoInsert={memoInsert} />
        </MemoMainRight>
      </div>
    </div>
  );
};

export default MemoMain;
