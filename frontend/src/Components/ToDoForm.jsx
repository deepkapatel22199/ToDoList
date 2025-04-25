import React, { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(input);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="todo-button">
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
