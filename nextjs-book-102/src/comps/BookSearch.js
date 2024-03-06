// BookSearch 컴포넌트를 CSR 의 client Component 로 사용하겠다
"use client";
const BookSearch = ({ search, setSearch }) => {
  // delay 라는 값이 전달이 안되면 기본값 200
  const debounce = (callback, delay = 200) => {
    let debounceTimer;
    return (...args) => {
      // debounce 함수가 호출되면 무조건 timer 를 reset 하라.
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => callback.apply(this, args), delay);
      // agrs 배열값들을 apply가 callback함수에게 전달
    };
  };
  // debounce 객체를 사용하여 onChangeHandler 제어하기
  // 키보드에서 문자를 입력한 후 100 ms 동안 기다리면
  // 그때 onChangeHandler 를 실행하라.
  // debounce 객체의 callback 이 onChangeHandler 가 된다.
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const onDebounceHandler = debounce(onChangeHandler, 300);

  return (
    <div className="book search">
      <input
        placeholder="검색어"
        defaultValue={search}
        onChange={onDebounceHandler}
        // onChange={(e) => onDebounceHandler(e)}
      />
    </div>
  );
};

export default BookSearch;
