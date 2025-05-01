import React, { useEffect, useState } from "react";
import "./MyTasks.css";

const MyTasks = () => {
  const [lists, setLists] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedHeading, setEditedHeading] = useState("");
  const [editedTasks, setEditedTasks] = useState([]);

  // Load lists from localStorage on first render
  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem("lists"));
    if (storedLists) {
      setLists(storedLists);
    }
  }, []);

  const saveToLocalStorage = (updatedLists) => {
    localStorage.setItem("lists", JSON.stringify(updatedLists));
  };

  const handleDelete = (index) => {
    const updatedLists = [...lists];
    updatedLists.splice(index, 1);
    setLists(updatedLists);
    saveToLocalStorage(updatedLists);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedHeading(lists[index].heading);
    setEditedTasks([...lists[index].tasks]);
  };

  const handleTaskChange = (taskIndex, value) => {
    const updatedTasks = [...editedTasks];
    updatedTasks[taskIndex].taskName = value;
    setEditedTasks(updatedTasks);
  };

  const handleSaveEdit = () => {
    const updatedLists = [...lists];
    updatedLists[editIndex] = {
      heading: editedHeading,
      tasks: editedTasks,
    };
    setLists(updatedLists);
    saveToLocalStorage(updatedLists);
    setEditIndex(null); // Exit edit mode
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  const handleAddTask = () => {
    setEditedTasks([...editedTasks, { id: Date.now(), taskName: "", completed: false }]);
  };

  const handleDeleteTask = (taskIndex) => {
    const updatedTasks = [...editedTasks];
    updatedTasks.splice(taskIndex, 1);
    setEditedTasks(updatedTasks);
  };
  const handleShare = (listId) => {
    const shareUrl = `${window.location.origin}/shared?id=${listId}`;
    navigator.clipboard.writeText(shareUrl)
      .then(() => alert('Shareable link copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err));
  };
  
  return (
    <div className="mytasks-container">
      <h1>My Tasks</h1>
      {lists.length === 0 ? (
        <p>No lists created yet.</p>
      ) : (
        lists.map((list, index) => (
          <div key={index} className="task-list-card">
            {editIndex === index ? (
              <div className="edit-mode">
                <input
                  type="text"
                  value={editedHeading}
                  onChange={(e) => setEditedHeading(e.target.value)}
                  placeholder="Edit heading..."
                />

                <h3>Tasks:</h3>
                {editedTasks.map((task, taskIndex) => (
                  <div key={task.id} className="edit-task-item">
                    <input
                      type="text"
                      value={task.taskName}
                      onChange={(e) => handleTaskChange(taskIndex, e.target.value)}
                      placeholder="Edit task..."
                    />
                    <button onClick={() => handleDeleteTask(taskIndex)}>Delete Task</button>
                  </div>
                ))}

                <button onClick={handleAddTask}>+ Add Another Task</button>

                <div className="edit-buttons">
                  <button onClick={handleSaveEdit}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <h2>{list.heading}</h2>
                <ul>
                {list.tasks.map((task, taskIndex) => (
  <li key={task.id} className={task.completed ? "completed" : ""}>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => {
        const updatedLists = [...lists];
        updatedLists[index].tasks[taskIndex].completed = !task.completed;
        setLists(updatedLists);
        saveToLocalStorage(updatedLists);
      }}
    />
    {task.taskName}
  </li>
))}

                </ul>

                <div className="list-actions">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handleShare(list.id)}>Share</button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MyTasks;
