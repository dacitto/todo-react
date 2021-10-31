import React, { useState } from "react";
import "./List.scss";
import Task from "../Task/Task";
import { BiTask } from "react-icons/bi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const List = ({ tasks, setTasks }) => {
  const [active, setActive] = useState("all");
  const filt = () => {
    return active === "all"
      ? /*[
          ...tasks.filter((task) => task.completed === false),
          ...tasks.filter((task) => task.completed === true),
        ]*/ tasks
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
    setTasks([
      ...newTasks.filter((task) => task.completed === false),
      ...newTasks.filter((task) => task.completed),
    ]);
  };
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };
  const droppableId = "tasks";
  return (
    <>
      {filt().length === 0 && (
        <div className="empty-list">
          <div className="icon-container">
            <BiTask className="icon"></BiTask>
          </div>
          <h2 className="text">No Tasks here</h2>
          {tasks.length > 0 && (
            <div className="control">
              <div>
                {tasks.filter((task) => task.completed === false).length} items
                left
              </div>
              {tasks.length > 0 && (
                <div className="filter desktop-only">
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
              <div
                className="clear"
                onClick={() => {
                  setTasks(tasks.filter((task) => task.completed === false));
                }}
              >
                Clear Completed
              </div>
            </div>
          )}
        </div>
      )}

      {tasks.length > 0 && filt().length > 0 && (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId={droppableId}>
            {(provided) => (
              <div className="list-conainer">
                <div
                  className="list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {filt().length === tasks.length &&
                    filt().map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task
                              completed={task.completed}
                              task={task}
                              RemoveTask={RemoveTask}
                              CompleteTask={CompleteTask}
                            ></Task>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                  {filt().length !== tasks.length &&
                    filt().map((task) => (
                      <Task
                        completed={task.completed}
                        task={task}
                        RemoveTask={RemoveTask}
                        CompleteTask={CompleteTask}
                      ></Task>
                    ))}
                </div>

                <div className="control">
                  <div>
                    {tasks.filter((task) => task.completed === false).length}{" "}
                    items left
                  </div>
                  {tasks.length > 0 && (
                    <div className="filter desktop-only">
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
                  <div
                    className="clear"
                    onClick={() => {
                      setTasks(
                        tasks.filter((task) => task.completed === false)
                      );
                    }}
                  >
                    Clear Completed
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}

      {tasks.length > 0 && (
        <div className="filter mobile-only">
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
