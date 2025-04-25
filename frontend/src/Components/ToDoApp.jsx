import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import "./ToDoApp.css";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTask = (text) => {
    if (text.trim()) {
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
      };
     
      setTasks([newTask, ...tasks]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditTask = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const saveEditTask = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
    setEditingId(null);
    setEditingText("");
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <ToDoForm onAddTask={addTask} />
      <ToDoList
        tasks={tasks}
        onDelete={deleteTask}
        onStartEdit={startEditTask}
        onSaveEdit={saveEditTask}
        editingId={editingId}
        editingText={editingText}
        setEditingText={setEditingText}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default ToDoApp;
