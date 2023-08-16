import { useState } from "react";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmitTodo = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        { id: Math.random() * 1000, text: inputText, completed: false },
      ]);
      setInputText("");
      return;
    }
    alert("할 일을 입력해주세요");
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <form>
        <input
          type="text"
          placeholder="할 일을 입력 해주세요."
          onChange={(e) => handleInputText(e)}
          value={inputText}
        />
        <button type="submit" onClick={(e) => handleSubmitTodo(e)}>
          등록
        </button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
