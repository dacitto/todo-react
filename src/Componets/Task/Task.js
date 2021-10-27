import React from "react";
import "./Task.scss";
import checkedIcon from "../../images/icon-check.svg";
const Task = ({ completed,task,RemoveTask,CompleteTask }) => {
  const checkedClass = completed ? "checked" : "" ;
  return (
    <div className="task">
      <span className={"check-circle " + checkedClass} onClick={()=>CompleteTask(task.id)}>
        {completed && <img src={checkedIcon} alt=""></img>}
      </span>
      <span className={"text " + checkedClass}>{task.task}</span>
      <span className="close" onClick={()=>{RemoveTask(task.id)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </span>
    </div>
  );
};

export default Task;
