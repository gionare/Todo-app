import React, { useState } from "react";

export default function Filters() {
  const array = [
    { id: 1, label: "items left" },
    { id: 2, label: "All" },
    { id: 3, label: "Active" },
    { id: 4, label: "Completed" },
    { id: 5, label: "Clear Completed" },
  ];
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="flex row-auto justify-between bg-grey rounded-[10px] px-3 py-2 drop-shadow-xl text-[#4d5067]">
      <div>
        <span className="cursor-pointer hover:text-white"> items left </span>
      </div>

      <div>
        <span
          onClick={handleActive}
          className={` cursor-pointer  hover:text-white  ${
            isActive ? "text-brightblue" : ""
          }`}
        >
          All{" "}
        </span>
        <span className="cursor-pointer px-1 hover:text-white ">Active </span>
        <span className="cursor-pointer px-1 hover:text-white">Completed </span>
      </div>

      <div>
        <span
          onClick={handleActive}
          className={` cursor-pointer  hover:text-white  ${
            isActive ? "text-brightblue" : ""
          }`}
        >
          Clear Complated
        </span>
      </div>
    </div>
  );
}
