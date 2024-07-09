import React from "react";

export default function AddTodo({ inputValue, setInputValue, setTodos }) {
  const handleAdd = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        text: inputValue,
        isDone: false,
        id: Math.random(),
      },
    ]);
    setInputValue("");
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter todo..."
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
