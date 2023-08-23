import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

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

  const onSubmitTodo = (e: React.FormEvent) => {
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
      <Form
        handleInputText={handleInputText}
        onSubmitTodo={onSubmitTodo}
        inputText={inputText}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
