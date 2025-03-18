// Display the current date
const currentDate = new Date();
document.getElementById("current-date").innerText = currentDate.toLocaleDateString();

// Time slots for the day
const timeSlots = [
  { time: "08:00 AM", emoji: "☕", task: "" },
  { time: "09:00 AM", emoji: "💻", task: "" },
  { time: "10:00 AM", emoji: "📚", task: "" },
  { time: "12:00 PM", emoji: "🍴", task: "" },
  { time: "01:00 PM", emoji: "📞", task: "" },
  { time: "03:00 PM", emoji: "🧘‍♂️", task: "" },
  { time: "06:00 PM", emoji: "🎮", task: "" },
  { time: "08:00 PM", emoji: "🛏", task: "" }
];

// Function to display time slots dynamically
const timeSlotsContainer = document.querySelector(".time-slots");
timeSlots.forEach((slot, index) => {
  const slotDiv = document.createElement("div");
  slotDiv.classList.add("time-slot");
  slotDiv.setAttribute("id", `slot-${index}`);
  
  const time = document.createElement("span");
  time.innerText = `${slot.time} ${slot.emoji}`;
  
  const task = document.createElement("span");
  task.classList.add("task-text");
  task.innerText = slot.task || "No Task Yet";
  
  slotDiv.appendChild(time);
  slotDiv.appendChild(task);
  timeSlotsContainer.appendChild(slotDiv);
});

// Add new task functionality
document.getElementById("add-task-btn").addEventListener("click", function() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskList = document.getElementById("task-list");

    // Create a new list item for the task
    const li = document.createElement("li");

    // Add task text
    li.appendChild(document.createTextNode(taskText));

    // Create a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.addEventListener("click", function() {
      taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
});
