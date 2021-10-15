const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";
const HIDDEN = "hidden";
const UNHIDDEN = "unHideen";
const FORMHIDDEN = "formHidden";

let toDos = [];

function saveToDos() {
  // JSON.stringify() 함수는 텍스트들을 배열로 만들어준다.
  // 값을 string으로 저장하고 싶을 때 많이 이용한다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  toDoForm.classList.remove(HIDDEN);
  localStorage.setItem(FORMHIDDEN, UNHIDDEN);
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const h3 = document.createElement("h3");
  h3.innerText = "TODAY";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "🗑";
  button.addEventListener("click", deleteTodo);
  li.appendChild(h3);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  toDoForm.classList.add(HIDDEN);
  localStorage.setItem(FORMHIDDEN, HIDDEN);
  paintTodo(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const formHidden = localStorage.getItem(FORMHIDDEN);

if (formHidden == null || formHidden == UNHIDDEN) {
  toDoForm.classList.remove(HIDDEN);
} else {
  toDoForm.classList.add(HIDDEN);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
  // JSON.parse() 함수는 JSON.stringify()한 문자열들을
  // js object 배열로 변경할 수 있게 해준다 EX) ["A", "B", "C"]
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // =>는 function이랑 똑같은데 화살표 function이라고 부른다.
  // forEach() 함수는 배열안에 있는 item들을 각각 한 번씩 실행해준다.
  // paintTodo function을 넣어줄 경우 parsedToDos Array에 들어있는 값들을 paintTodo 인자 값으로 보내준다. EX) paintTodo("a") paintTodo("b")
  parsedToDos.forEach(paintTodo);
}

// filter() 함수는 forEach와 비슷하게 ()안에 들어있는 함수를 각각 한 번씩 실행해주고 조건에 맞는 요소를 모두 모아 새로운 배열로 반환해준다.
// 또한 filter는 기존 배열의 값을 변경하지 않는다.
