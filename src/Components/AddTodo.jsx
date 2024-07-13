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
    <div className=" mt-[50px] relative rounded-[10px] overflow-hidden drop-shadow-xl">
      <input
        className="py-4 pl-10 bg-grey outline-none text-[#4d5067] text-[18px] w-full "
        type="text"
        value={inputValue}
        placeholder="Create a new Todo..."
        onChange={(event) => setInputValue(event.target.value)}
        // className="w-full"
      />
      <button
        onClick={handleAdd}
        className="absolute top-2 right-5 hover:opacity-60 hover:bg-green-300 text-green-700 font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </div>
  );
}
