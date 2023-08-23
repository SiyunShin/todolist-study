import { Todo } from "../App";

type Props = {
  todos: Todo[];
  handleDeleteTodo: (id: number) => void;
};

const TodoList = ({ todos, handleDeleteTodo }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input type="checkbox" />
            <span>
              {todo.text} / completed: {JSON.stringify(todo.completed)}
            </span>
            <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
              삭제
            </button>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
