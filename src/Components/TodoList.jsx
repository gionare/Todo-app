import React, { useState } from "react";

export default function TodoList({ todos, setTodos }) {
  const [editId, setEditId] = useState();
  const [editText, setEditText] = useState("");

  const handleCheck = (id, event) => {
    setTodos((prevTodos) => [
      ...prevTodos.map((item) =>
        item.id === id
          ? {
              ...item,
              isDone: event.target.checked,
            }
          : item
      ),
    ]);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => [...prevTodos.filter((item) => item.id !== id)]);
  };

  const handleEdit = (item) => {
    setEditId(item.id), setEditText(item.text);
  };

  const handleSave = () => {
    setTodos((prevTodos) => [
      ...prevTodos.map((item) =>
        item.id == editId
          ? {
              ...item,
              text: editText,
            }
          : item
      ),
    ]);
    setEditId();
  };

  return (
    <ul className="w-full bg-grey mt-[30px] rounded-[20px]">
      {todos.map((item) => (
        <li key={item.id} className="py-3">
          <input
            type="checkbox"
            onChange={(event) => handleCheck(item.id, event)}
            className="appearance-none mr-2 h-6 w-6 border border-gray-300 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 checked:border-transparent focus:outline-none checked:relative checked:before:content-['✓'] checked:before:absolute checked:before:top-0 checked:before:left-0 checked:before:text-white checked:before:text-center checked:before:w-full checked:before:h-full"
          />
          {item.id === editId ? (
            <input
              defaultValue={item.text}
              onChange={(event) => {
                setEditText(event.target.value);
              }}
            />
          ) : (
            <span
              className={`${
                item.isDone ? "line-through text-[#4d5067]" : "color-[c8cbe7]"
              }`}
            >
              {" "}
              {item.text}
            </span>
          )}

          <button
            onClick={() => handleDelete(item.id)}
            className="float-right text-#c8cbe7 mr-2 hover:bg-red-300 text-red-700 font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
          <button
            onClick={() => {
              item.id == editId ? handleSave(item) : handleEdit(item);
            }}
            className="float-right text-#c8cbe7 mr-2  hover:bg-blue-400 text-blue-700 font-bold py-2 px-4 rounded"
          >
            {item.id == editId ? "Save" : "Edit"}
          </button>
        </li>
      ))}
    </ul>
  );
}
