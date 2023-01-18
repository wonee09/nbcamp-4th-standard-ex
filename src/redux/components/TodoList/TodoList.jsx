import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledDiv, StyledTodoListHeader, StyledTodoListBox } from "./styles";
import Todo from "../Todo";
import { __getTodos } from "../../modules/todos";

/**
 * 컴포넌트 개요 : 메인 > TODOLIST. 할 일의 목록을 가지고 있는 컴포넌트
 * 2022.12.16 : 최초 작성
 *
 * @returns TodoList 컴포넌트
 */
function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    // 모든 todos를 가지고 오는 로직이 필요!
    // 어디서? DB에서!
    // 왜? 화면이 맨 처음 열릴때는 비어있을 테니
    // 그 청크를 만들어줄거에요!
    dispatch(__getTodos());
  }, []);

  return (
    <StyledDiv>
      <StyledTodoListHeader>
        {isActive ? "해야 할 일 ⛱" : "완료한 일 ✅"}
      </StyledTodoListHeader>
      <StyledTodoListBox>
        {todos
          ?.filter((item) => item.isDone === !isActive)
          .map((item) => {
            return <Todo key={item.id} todo={item} isActive={isActive} />;
          })}
      </StyledTodoListBox>
    </StyledDiv>
  );
}

export default TodoList;
