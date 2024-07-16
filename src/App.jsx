import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import Filters from "./Components/Filters";
import { createContext } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [filter, setFilter] = useState("all");

  const toogleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <main
      className={`${
        darkMode ? "bg-hero-pattern" : "bg-hero-pattern-light bg-white"
      } bg-no-repeat bg-fixed min-w-fit min-h-screen  `}
    >
      <div className="w-[540px] mx-auto transform translate-y-[80px] ">
        <div className="flex justify-between items-center  ">
          <h1 className="text-white text-[40px] font-bold">T O D O</h1>

          <img
            src={darkMode ? "/icon-sun.svg" : "/icon-moon.svg"}
            alt=""
            onClick={toogleDarkMode}
          />
        </div>
        <AddTodo
          inputValue={inputValue}
          setInputValue={setInputValue}
          setTodos={setTodos}
          darkMode={darkMode}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          darkMode={darkMode}
          filter={filter}
        />
        <Filters
          darkMode={darkMode}
          filter={filter}
          setFilter={setFilter}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </main>
  );
}

export default App;
