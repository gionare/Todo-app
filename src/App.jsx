import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState();
  const [editText, setEditText] = useState("");

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
    <>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter todo..."
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((item) => (
          <li key={item.id} className={item.isDone ? "completed" : ""}>
            <input
              type="checkbox"
              onChange={(event) => handleCheck(item.id, event)}
            />
            {item.id === editId ? (
              <input
                defaultValue={item.text}
                onChange={(event) => {
                  setEditText(event.target.value);
                }}
              />
            ) : (
              item.text
            )}

            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button
              onClick={() => {
                item.id == editId ? handleSave(item) : handleEdit(item);
              }}
            >
              {item.id == editId ? "Save" : "Edit"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
