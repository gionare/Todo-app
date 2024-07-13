import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import Filters from "./Components/Filters";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <main className="bg-hero-pattern bg-no-repeat bg-center bg-cover ">
      <div className="w-[540px] mx-auto transform translate-y-[80px]">
        <div className="flex justify-between items-center  ">
          <h1 className="text-white text-[40px] font-bold">T O D O</h1>
          <img src="/icon-sun.svg" alt="" />
        </div>
        <AddTodo
          inputValue={inputValue}
          setInputValue={setInputValue}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
        <Filters />
      </div>
    </main>
  );
}

export default App;
