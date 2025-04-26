import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlinePushPin } from "react-icons/md";
import { motion } from "framer-motion";
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
  togglePin
}) => {const sortedTasks = [...tasks].sort((a, b) => {
        if (a.pinned === b.pinned) return 0;
        return a.pinned ? -1 : 1;
    });
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {sortedTasks.map(task => (
          <li  
          key={task.id}
          className={`todo-item ${task.completed ? "completed" : ""} ${task.pinned ? "pinned" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)} 
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
                <button className="pin-btn" onClick={() => togglePin(task.id)}>
                  <MdOutlinePushPin color={task.pinned ? "#f39c12" : "#aaa"} />
                </button>
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
