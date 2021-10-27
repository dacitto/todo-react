import React from "react";
import "./List.scss";
import Task from "../Task/Task";
const List = ({tasks,setTasks}) => {
  const RemoveTask = (id)=> {
    console.log('id  ' + id)
    setTasks(tasks.filter(task => task.id!==id))
  }
  console.log(tasks);
  return (
    <>
    <div className="list">
      {tasks.map(task=>(
        <Task completed={task.completed} key={task.id} task={task} RemoveTask={RemoveTask}></Task>
      ))}
    </div>
    {
      tasks.length>0 &&
      <div className="filter">
            <ul>
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>
      </div>
      }
    </>
  );
};

export default List;
