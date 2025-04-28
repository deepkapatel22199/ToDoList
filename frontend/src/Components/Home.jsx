import React, { useState, useEffect } from "react";
import "./Home.css";
import { IoCloseSharp } from "react-icons/io5";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState([]);

  // Load saved lists from localStorage when component mounts
  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem("lists"));
    if (storedLists) {
      setLists(storedLists);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task) {
      const newTask = { id: Date.now(), taskName: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask(""); // Reset task input field after adding task
    }
  };

  const handleCreateList = () => {
    if (heading && tasks.length > 0) {
      const newList = { heading, tasks };
      const updatedLists = [...lists, newList];
      setLists(updatedLists);

      // Save updated lists to localStorage
      localStorage.setItem("lists", JSON.stringify(updatedLists));

      closeModal();
      setHeading("");
      setTasks([]);
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to the To-Do List App</h1>
      <p>Your personal task manager.</p>
      <button className="AddToDoList-btn" onClick={openModal}>Add Your TODO List</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add Your To-Do List</h2>
              <button className="close-modal-btn" onClick={closeModal}>
                <IoCloseSharp />
              </button>
            </div>

            <div className="input-group">
              <label>Heading</label>
              <input
                type="text"
                placeholder="Enter heading..."
                value={heading}
                onChange={handleHeadingChange}
              />
            </div>

            <div className="input-group">
              <label>Task</label>
              <input
                type="text"
                placeholder="Enter a task..."
                value={task}
                onChange={handleTaskChange}
              />
              <button className="add-task-btn" onClick={handleAddTask}>Add Task</button>
            </div>

            <ul className="task-list">
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <li key={task.id} className={task.completed ? "completed" : ""}>
                    {task.taskName}
                  </li>
                ))
              ) : (
                <li className="no-tasks">No tasks added yet!</li>
              )}
            </ul>

            <div className="modal-actions">
              <button className="create-list-btn" onClick={handleCreateList}>Create List</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
