
const submitBtn = document.getElementById('submitBtn');
const inputEl = document.getElementById('todo-input');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const todosUlEl = document.getElementById('todos');
  const newEl = document.createElement('li');
  newEl.textContent = inputEl.value;
  console.log(newEl);
  todosUlEl.appendChild(newEl);

});