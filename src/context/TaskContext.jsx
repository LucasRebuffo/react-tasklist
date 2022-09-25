import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const createTask = (taskTitle, descripcion) => {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: descripcion,
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((x) => x.id != id));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        removeTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
