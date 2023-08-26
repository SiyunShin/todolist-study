import { styled } from "styled-components";
import { Todo } from "../App";

type Props = {
  todos: Todo[];
  handleDeleteTodo: (id: number) => void;
  handleCheck: (id: number) => void;
};

const TodoList = ({ todos, handleDeleteTodo, handleCheck }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <StyledTodoItem key={todo.id} completed={todo.completed}>
          <label>
            <input type="checkbox" onChange={() => handleCheck(todo.id)} />
            <span>
              {todo.text} / completed: {JSON.stringify(todo.completed)}
            </span>
            <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
              삭제
            </button>
          </label>
        </StyledTodoItem>
      ))}
    </ul>
  );
};

const StyledTodoItem = styled.li<{ completed: boolean }>`
  color: ${({ completed }) => completed && "#b9b9b9"};
`;

export default TodoList;
