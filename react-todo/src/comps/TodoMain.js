import { useState } from "react";
import TodoInput from "./TodoInput";

import "../css/Todo.css";
import TodoList from "./TodoList";
const TodoMain = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(["정보처리기사 필기", "React 학습", "JS 학습", "월요일 저녁", "이번주는 매우 추워"]);
  return (
    <div className="todo">
      {/* 자식에게 전달 */}
      <TodoInput todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoMain;
// input box 에서 list box 로 추가하고싶지만 react 에서는 자식끼리 데이터를 주고받지 못함
// input box 에서 데이터를 부모에게 주고 다시 list box 에게 줌
