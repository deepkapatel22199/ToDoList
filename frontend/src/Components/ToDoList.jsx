import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlinePushPin } from "react-icons/md";
import { motion } from "framer-motion";
import "./ToDoList.css";

const ToDoList = () => {
  return (
    <div className="todo-list">
      <h2>List Heading</h2>
      <div className="todo-item">Task 1</div>
      <div className="todo-item">Task 2</div>
      <div className="todo-item">Task 3</div>
    </div>
  );
}

export default ToDoList;
