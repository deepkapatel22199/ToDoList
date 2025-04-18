import React from "react";
import "./ToDoForm.css";

const ToDoForm = () => {
  return (
    <form className="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="Enter a new task..."
      />
      <button type="submit" className="todo-button">
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
