import type { Todo } from "../App";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Footer = ({ todos }: Props) => {
  const leftTodosCount = todos.filter(
    (item) => item.completed === false
  ).length;

  if (!leftTodosCount) return <>할 일 없음</>;

  return (
    <div>
      <p>{leftTodosCount} 개의 할 일이 남음</p>
    </div>
  );
};

export default Footer;
