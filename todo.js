let saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", createButton);

function createButton() {
  let taskName = document.getElementById("task-name");

  let checkBox = generateCheckBox();

  let editBtn = generateEditBtn();

  let deleteBtn = generateDeleteBtn();

  let taskTag = document.createElement("div");
  taskTag.textContent = taskName.value;

  let liTag = document.createElement("li");
  liTag.append(checkBox, taskTag, editBtn, deleteBtn);

  let ulTag = document.getElementById("task-list");

  ulTag.appendChild(liTag);

  taskName.value = "";

  countCheckBox();
}

function editTask() {
  let editText = document.createElement("input");
  editText.setAttribute("type", "text");
  editText.setAttribute("id", "edit-task");

  targetNode = event.target.parentNode
  editText.value = targetNode.querySelector("div").textContent;

  let saveBtn = generateSaveBtn();

  let liTag = document.createElement("li");
  liTag.append(editText, saveBtn);

  targetNode.replaceWith(liTag);
}

function deleteTask() {
  if (window.confirm("本当に削除してもよろしいですか？")) {
    let parent = event.target.parentNode;
    parent.remove();
    countCheckBox();
  }
}

function reCreate() {
  let taskName = document.getElementById("edit-task");

  let taskTag = document.createElement("div");
  taskTag.textContent = taskName.value;

  let liTag = document.createElement("li");

  let checkBox = generateCheckBox();

  let editBtn = generateEditBtn();

  let deleteBtn = generateDeleteBtn();

  liTag.append(checkBox, taskTag, editBtn, deleteBtn);

  event.target.parentNode.replaceWith(liTag);
}

function generateCheckBox() {
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "checks");
  return checkBox;
}

function generateEditBtn() {
  let editBtn = document.createElement("button");
  editBtn.setAttribute("id", "edit-btn");
  editBtn.textContent = "(編集)";
  editBtn.addEventListener("click", editTask);
  return editBtn;
}

function generateDeleteBtn() {
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "delete-btn");
  deleteBtn.textContent = "(削除)";
  deleteBtn.addEventListener("click", deleteTask);
  return deleteBtn;
}

function generateSaveBtn() {
  let saveBtn = document.createElement("input");
  saveBtn.setAttribute("type", "button");
  saveBtn.value = "(保存)";
  saveBtn.addEventListener("click", reCreate);
  return saveBtn;
}

function countCheckBox() {
  let targets = document.querySelectorAll(`input[type='checkbox']`);
  let allTask = document.getElementById("all-task");
  allTask.innerHTML = targets.length;

  let compuletedTask = document.getElementById("compuleted-task");
  let uncompuletedTask = document.getElementById("uncompuleted-task");
  uncompuletedTask.innerHTML = calcUncompuletedTask(allTask, compuletedTask);
  countTaskStatus(allTask, compuletedTask, uncompuletedTask);

  targets.forEach(function (target) {
    target.addEventListener("change", () => {
     countTaskStatus(allTask, compuletedTask, uncompuletedTask);
    });
  });
}

function calcUncompuletedTask(allTask, compuletedTask) {
  return Number(allTask.innerHTML) - Number(compuletedTask.innerHTML);
}

function countTaskStatus(allTask, compuletedTask, uncompuletedTask) {
  let count = 0;
  const checkbox = document.getElementsByClassName("checks");

  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      count++;
    }
  }
  compuletedTask.innerHTML = count;
  uncompuletedTask.innerHTML = calcUncompuletedTask(allTask, compuletedTask);
}
