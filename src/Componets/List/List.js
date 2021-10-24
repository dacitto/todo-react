import React from "react";
import "./List.scss";
import Task from "../Task/Task";
const List = () => {
  return (
    <div className="list container">
      <Task checked={"active"}></Task>
      <Task></Task>
      <Task checked={"active"}></Task>
    </div>
  );
};

export default List;
