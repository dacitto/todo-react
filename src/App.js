import { useState } from "react";
import Header from "./Componets/Header/Header";
import List from "./Componets/List/List";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "hey", completed: false },
    { id: 2, task: "take the nothing", completed: false },
    { id: 3, task: "go to sleep", completed: true },
    { id: 4, task: "useless task", completed: true },
  ]);
  const [isDark, setIsDark] = useState(true);
  document.body.classList = isDark ? "dark" : "";
  return (
    <div className={isDark && "dark"}>
      <Header
        tasks={tasks}
        setTasks={setTasks}
        isDark={isDark}
        setIsDark={setIsDark}
      ></Header>
      <div className="container">
        <List tasks={tasks} setTasks={setTasks}></List>
      </div>
    </div>
  );
}

export default App;
