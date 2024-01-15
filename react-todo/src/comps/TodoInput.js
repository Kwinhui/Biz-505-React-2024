// import { useState } from "react";
// TodoMain 에서 보낸 todo, setTodo, setTodoList
// props(properties)로 받기
// TodoMain(부모) 에서 todo, setTodo, todoList, setTodoList 를 전달받음
const TodoInput = ({ todo, setTodo, todoList, setTodoList }) => {
  //   const [todo, setTodo] = useState("");
  const todoOnChangeHandler = (event) => {
    const target = event.target;
    setTodo(target.value);
  };
  const addBtnClickHandler = () => {
    // todoList 배열을 변화를 주는 setTodoList
    setTodoList([...todoList, todo]);
    // ... 전개연산 = 새로운 배열[]을 하나 만들고 기존에 있는
    // todoList의 배열을 전부 펼쳐서 복사하고
    // 그 끝에 todo 배열을 집어넣어라
  };

  return (
    <div className="input">
      <input placeholder="TO DO..." value={todo} onChange={todoOnChangeHandler} />
      {/* 
      todo state 에 저장된 값이
      2글자 이상일때만 버튼을 클릭할 수 있도록 하라
      */}
      <button id="btn_add" onClick={addBtnClickHandler} disabled={todo.length < 2}>
        추가
      </button>
    </div>
  );
};

export default TodoInput;
