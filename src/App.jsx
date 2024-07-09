import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <main className="bg-hero-pattern bg-no-repeat">
      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
