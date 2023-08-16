import { Todo } from "../App";

type Props = {
  todos: Todo[];
};

const TodoList = ({ todos }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input type="checkbox" />
            <span>
              {todo.text} / completed: {JSON.stringify(todo.completed)}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
