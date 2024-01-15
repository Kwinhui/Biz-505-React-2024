// import { useState } from "react";

// TodoMain(부모) 에서 todoList 를 전달받음
// list를 그려주는 역할만 함
const TodoList = ({ todoList }) => {
  // todoList 배열을 펼처서 요소 1개씩 item 에 담아서 들여보냄
  // 선언적 코드
  const todoItemView = todoList.map((item) => {
    // todoList 배열을 펼쳐서 요소 1개씩 item 에 담아서 들여보냄
    return <div>{item}</div>;
    // <div>{item}</div> 배열 3개가 만들어짐
  });

  return <div className="list">{todoItemView}</div>;
  // for-each와 비슷하지만 return문이 있고 가공된 배열로 만들어짐
};

export default TodoList;
