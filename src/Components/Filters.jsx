import React, { useState } from "react";

export default function Filters({ darkMode, setFilter, filter, setTodos }) {
  return (
    <div
      className={`${
        darkMode ? "bg-grey" : "bg-whitelist "
      } flex row-auto justify-between  rounded-[10px] px-3 py-2 drop-shadow-xl text-[#4d5067]`}
    >
      <div className="flex row-auto  justify-around  w-full">
        <span
          onClick={() => setFilter("all")}
          className={`cursor-pointer  ${
            darkMode ? "hover:text-white" : "hover:text-brightblue"
          }  ${
            filter === "all" ? (darkMode ? "text-white" : "text-sky-600") : ""
          }`}
        >
          {" "}
          All
        </span>
        <span
          onClick={() => setFilter("active")}
          className={`cursor-pointer  ${
            darkMode ? "hover:text-white" : "hover:text-brightblue"
          }  ${
            filter === "active"
              ? darkMode
                ? "text-white"
                : "text-sky-600"
              : ""
          }`}
        >
          Active
        </span>
        <span
          onClick={() => setFilter("completed")}
          className={`cursor-pointer  ${
            darkMode ? "hover:text-white" : "hover:text-brightblue"
          }  ${
            filter === "completed"
              ? darkMode
                ? "text-white"
                : "text-sky-600"
              : ""
          }`}
        >
          Completed
        </span>
        <span
          className={`cursor-pointer  ${
            darkMode ? "hover:text-white" : "hover:text-brightblue"
          }  `}
          onClick={() =>
            setTodos((prevTodos) => prevTodos.filter((item) => !item.isDone))
          }
        >
          {" "}
          Clear Completed
        </span>
      </div>
    </div>
  );
}
