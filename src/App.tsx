import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import Footer from "./components/Footer";

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

  const handleSubmitTodo = (e: React.FormEvent) => {
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

  const handleDeleteTodo = (id: number) => {
    setTodos([...todos].filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <Form
        handleInputText={handleInputText}
        handleSubmitTodo={handleSubmitTodo}
        inputText={inputText}
      />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
