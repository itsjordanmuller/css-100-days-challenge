const tasks = [
  "Create a list",
  "Complete first task",
  "Write some CSS code",
  "Amaze the world",
];

const taskContainer = document.getElementById("taskContainer");

tasks.forEach((task, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" id="task-${index + 1}" name="task-${index + 1}" />
    <label for="task-${index + 1}" class="task-text">${task}</label>
    <label for="task-${index + 1}" class="task-button"></label>
    <svg width="15px" height="10px" class="task-checkmark">
      <polyline points="1,5 6,9 14,1" />
    </svg>
  `;
  taskContainer.appendChild(li);
});
