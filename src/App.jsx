import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <main className="bg-hero-pattern bg-no-repeat">
      <div className="w-[540px] mx-auto border-2">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-[40px] font-bold ">TODO</h1>
          <img src="/icon-sun.svg" alt="" />
        </div>
        <AddTodo
          inputValue={inputValue}
          setInputValue={setInputValue}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </main>
  );
}

export default App;
