import React from "react";
import "./Home.css";

const Home = () => {
    return(
        <div className="home-container">
            <h1>Welcome to the To-Do List App</h1>
            <p>Your personal task manager.</p>
            <p>Organize your tasks efficiently and stay productive!</p>
            <button className="AddToDoList-btn">Add Your TODO List</button>
        </div>
    ); 
}
export default Home;
