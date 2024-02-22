import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoMain.css";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
const TodoMain = () => {
  const [todoItem, setTodoItem] = useState("");

  const [todoList, setTodoList] = useState(() => {
    // 로컬스토리지에 todoList 가 있으면 json type 으로 바꾸어서 화면에 세팅해주고
    // 없으면 빈 배열로 만들어줘
    return localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];
  });

  const saveStorage = () => {
    // JS 데이터를  JSON문자열로 변환
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("KOREA", "대한민국");
  };
  // todoList 에 변화가 생기는 효과가 발생하면 saveStorage 함수 실행
  // 어떤 특정한 데이터가 변경되었을때 실행할 event 를 설정
  useEffect(saveStorage, [todoList]);

  const todoInsert = () => {
    // seq: uuid() 데이터 insert, update 할때 사용
    const newTodoList = [...todoList, { seq: uuid(), todo: todoItem, complete: false }];
    setTodoList(newTodoList);
  };

  const todoComplete = (seq) => {
    const result = todoList.map((item) => {
      // 배열의 각각 요소들에게 변화를 주기위한 함수

      // todoList 중에 선택한 item 이면
      if (item.seq === seq) {
        return { ...item, complete: !item.complete };
        // item 을 펼쳐서 복사한 후
        // complete 라는 속성이 있으면 item의 complete를 반대로
        // complete: false 이면 complete: true로
      }
      return item;
    });
    setTodoList([...result]);
  };

  const todoDelete = (seq) => {
    // item.seq !== seq 가 true 인 값들만 모아서 배열로 만들어줌
    const result = todoList.filter((item) => {
      // return 값이 false 이면 그 값을 제외
      return item.seq !== seq;
    });

    setTodoList([...result]);
  };

  return (
    <div className="todoMain">
      <header className="todoHeader">
        <h1>지금 할일!!</h1>
      </header>
      <TodoInput todoItem={todoItem} setTodoItem={setTodoItem} todoInsert={todoInsert} />
      <TodoList todoList={todoList} todoComplete={todoComplete} todoDelete={todoDelete} />
    </div>
  );
};

export default TodoMain;
