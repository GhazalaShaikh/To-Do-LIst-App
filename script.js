const inputBox = document.querySelector("#taskInput");

const taskList = [];

inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function Task(value) {
  this.taskName = value;
  this.timestamp = new Date().toDateString();
}

function addTask() {
  const taskName = inputBox.value;
  const task = new Task(taskName);
  taskList.push(task);
  const listEl = document.querySelector("#list");
  listEl.append(createListItem(taskName));
  inputBox.value = "";
}

function createListItem(value, cb) {
  const item = document.createElement("li");
  item.classList.add("list-item");
  item.innerText = value;
  const removeEl = document.createElement("span");
  removeEl.innerHTML = "&times;";
  removeEl.onclick =  removeItemFromList;
  item.append(removeEl);
  return item;
}

function removeItemFromList(event) {
  const listEl = document.querySelector("#list");
  console.dir(event.target)
  listEl.removeChild(event.target.parentNode);
}