
const submitBtn = document.getElementById('submitBtn');
const inputEl = document.getElementById('todo-input');
const todosUlEl = document.getElementById('todos');

let todos = [];

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let newEl = document.createElement('li');
  let delBtn = document.createElement('button');
  delBtn.innerText = "Delete";
  delBtn.setAttribute("class", "delete");
  let editBtn = document.createElement('button');
  editBtn.innerText = "Edit";
  editBtn.setAttribute("class", "edit");
  newEl.innerText = inputEl.value;
  newEl.appendChild(delBtn);
  newEl.appendChild(editBtn);
  todos.push(newEl.innerText);
  todosUlEl.appendChild(newEl);
});

deleteBtn = document.getElementsByClassName('delete');

deleteBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e);
})
