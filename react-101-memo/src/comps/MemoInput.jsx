const MemoInput = ({ memo, setMemo, memoInsert }) => {
  const onChangeHandler = (e) => {
    const target = e.target;
    const text = target.value;
    // name 속성
    const name = target.name;
    setMemo({ ...memo, [name]: text });
    /**
     * 기존의 memo 객체를 새롭게 복제하고
     * [name] 속성에 저장된 문자열을 key 로 하여
     * input tag 에 입력된 값을 새로운 객체에 포함하여라
     */

    // 위아래 같은 코드
    // if (name === "m_subject") {
    //   setMemo({ ...memo, m_subject: text });
    // } else if (name === "m_memo") {
    //   setMemo({ ...memo, m_memo: text });
    // }
    /**
     * 기존의 memo 객체를 새롭게 복제하고
     * m_subject 를 input tag 에 입력된 문자열로 대체하여 포함시켜라
     */
  };

  const onClickInsert = () => {
    memoInsert();
  };
  return (
    <>
      <input type="text" placeholder="메모제목" value={memo.m_subject} onChange={onChangeHandler} name="m_subject" />
      <input type="text" placeholder="메모를 입력하세요" value={memo.m_memo} onChange={onChangeHandler} name="m_memo" />
      <input type="file" />
      <input type="button" value="추가" onClick={onClickInsert} />
      <input type="hidden" value="삭제" />
      <p>{memo.m_subject}</p>
    </>
  );
};
export default MemoInput;
