import React, { useState } from "react";
import "./List.scss";
import Task from "../Task/Task";

const List = ({ tasks, setTasks }) => {
  const [active, setActive] = useState("all");
  const filt = () => {
    return active === "all"
      ? tasks
      : tasks.filter((task) => task.completed === active);
  };

  const RemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const CompleteTask = (id) => {
    const newTasks = tasks.map((task) => {
      task.completed = task.id === id ? !task.completed : task.completed;
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <>
      <div className="list">
        {filt().map((task) => (
          <Task
            completed={task.completed}
            key={task.id}
            task={task}
            RemoveTask={RemoveTask}
            CompleteTask={CompleteTask}
          ></Task>
        ))}
      </div>
      {tasks.length > 0 && (
        <div className="filter">
          <ul>
            <li
              className={active === "all" ? "active" : null}
              onClick={() => setActive("all")}
            >
              All
            </li>
            <li
              className={active === false ? "active" : null}
              onClick={() => setActive(false)}
            >
              Active
            </li>
            <li
              className={active === true ? "active" : null}
              onClick={() => setActive(true)}
            >
              Completed
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default List;
