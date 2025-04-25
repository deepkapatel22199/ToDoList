import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./ToDoList.css";

const ToDoList = ({
  tasks,
  onDelete,
  onStartEdit,
  onSaveEdit,
  editingId,
  editingText,
  setEditingText,
  onToggleComplete,
}) => {
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {tasks.map(task => (
          <li  
          key={task.id}
          className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)} // ✅ Added
            />
            {editingId === task.id ? (
              <>
                <input
                  className="edit-input"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button className="save-btn" onClick={() => onSaveEdit(task.id, editingText)}>Save</button>
              </>
            ) : (
              <>
                <span className="task-text">{task.text}</span>
                <div className="task-edit-delete">
                  <button className="edit-btn" onClick={() => onStartEdit(task.id, task.text)}><FaEdit /></button>
                  <button className="delete-btn" onClick={() => onDelete(task.id)}><MdDeleteOutline /></button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
