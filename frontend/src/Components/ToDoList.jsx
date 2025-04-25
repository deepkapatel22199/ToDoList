import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./ToDoList.css";

const ToDoList = () => {
  return (
    <div className="todo-list-container">
        <ul className="todo-list">
            <li className="todo-item">
            <span className="task-text">Learn React</span>
            <div className="task-edit-delete">
                <button className="delete-btn"><FaEdit /></button>
                <button className="delete-btn"><MdDeleteOutline /></button>
            </div>
        </li>
        <li className="todo-item">
          <span className="task-text">Build a To Do App</span>
          <div className="task-edit-delete">
                <button className="delete-btn"><FaEdit /></button>
                <button className="delete-btn"><MdDeleteOutline /></button>
            </div>
        </li>
        <li className="todo-item">
          <span className="task-text">Style the UI</span>
            <div className="task-edit-delete">
                <button className="delete-btn"><FaEdit /></button>
                <button className="delete-btn"><MdDeleteOutline /></button>
            </div>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
