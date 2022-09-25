import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Escribe algo"
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
          required
        />
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          placeholder="Escribe las descripcion"
          className="bg-slate-300 p-3 w-full mb-2"
          required
        ></textarea>
        <button className="bg-indigo-500 px-3 py1 text-white rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
