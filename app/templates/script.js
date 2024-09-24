"use strict";
// Get elements
const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Add event listener for the "Add Task" button
addTaskBtn.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Check if the input is not empty
  if (taskText !== "") {
    // Create new task list item
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;

    // Append new task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Add delete functionality to the new button
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
    });
  }
}
