const MemoInput = ({ memoItem, setMemoItem, memoInsert }) => {
  const onInsertHandler = () => {
    memoInsert();
    setMemoItem("");
  };
  const onChangeHandler = (e) => {
    const text = e.target.value;

    setMemoItem(text);
  };
  return (
    <>
      <input type="text" placeholder="메모제목" value={memoItem} onChange={onChangeHandler} />
      <input type="text" placeholder="메모를 입력하세요" />
      <input type="file" />
      <input type="button" value="추가" onClick={onInsertHandler} />
      <input type="hidden" value="삭제" />
    </>
  );
};
export default MemoInput;
