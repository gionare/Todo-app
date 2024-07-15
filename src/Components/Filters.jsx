import React, { useState } from "react";

export default function Filters({ darkMode, isActive }) {
  const array = [
    { id: 1, label: "items left" },
    { id: 2, label: "All" },
    { id: 3, label: "Active" },
    { id: 4, label: "Completed" },
    { id: 5, label: "Clear Completed" },
  ];

  const handleActive = (id) => {
    setIsActive(id);
    console.log(isActive);
  };
  return (
    <div
      className={`${
        darkMode ? "bg-grey" : "bg-whitelist "
      } flex row-auto justify-between  rounded-[10px] px-3 py-2 drop-shadow-xl text-[#4d5067]`}
    >
      <div className="flex row-auto  justify-around  w-full">
        {array.map((item) => (
          <span
            key={item.id}
            onClick={() => handleActive(item.id)}
            className={`cursor-pointer ${
              darkMode ? "hover:text-white" : "hover:text-brightblue"
            }  ${isActive === item.id ? "text-white" : ""}`}
          >
            {" "}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
