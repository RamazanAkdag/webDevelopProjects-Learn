const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const scndCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
  //tüm eventlistenerlar burada atanacak
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  scndCardBody.addEventListener("click", deleteTodo);
  filter.addEventListener("keyup", filterTodos); //filter üzerinde tuşa her basıldıgında çalışır
  clearButton.addEventListener("click", clearAllTodos);
}

function clearAllTodos() {
  if (confirm("tümünü silmek istediğinize emin misiniz ?")) {
    while (todoList.firstElementChild != null) {
      todoList.removeChild(todoList.firstElementChild); //her seferinde ilk elemanı siliyor
    }
    localStorage.removeItem("todos"); //local storageden silme
  }
}

function filterTodos(e) {
  //todoları filtreleyerek arama yapma
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      //bulunamadı
      listItem.setAttribute("style", "display : none !important"); //bootstrapte verilen d-flex özelliği important özellikte oldugu için son verilen
      //disolay özelliğini baskılıyor bundan dolayı  burada da impoortant özelliği vermemiz gerek
    } else {
      //bulundu
      listItem.setAttribute("style", "display : block !important");
    }
  });
  console.log(e.target.value);
}

function addTodo(e) {
  const newTodo = todoInput.value.trim(); //başına ve sonuna koyulan boşlukları siler

  if (newTodo === "") {
    showAlert("danger", "lütfen bir todo girin.");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
  }

  e.preventDefault(); //form tekrar sayfaya yönlenmesin diye
}

function addTodoToUI(newTodo) {
  /*<li class="list-group-item d-flex justify-content-between">
        Todo 1
        <a href = "#" class ="delete-item">
            <i class = "fa fa-remove"></i>
        </a>
    </li> */
  //elementleri oluşturma
  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  const deleteItem = document.createElement("a");
  deleteItem.href = "#";
  deleteItem.className = "delete-item";
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa fa-remove";
  //elementleri birleştirme
  deleteItem.appendChild(deleteIcon);
  listItem.appendChild(deleteItem);

  //arayüze ekleme
  todoList.appendChild(listItem);

  todoInput.value = "";

  showAlert("success", "kayıt başarıyla eklendi.");

  console.log(listItem);
}

function showAlert(type, message) {
  /*<div class="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> please check your input and try submitting
        again.
    </div> */
  //cardBodye append child olarak
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`; //string icinde degisken kulllanılacaksa tek `bu ifadenin arasına yazılmalı`
  alert.appendChild(document.createTextNode(message));

  firstCardBody.appendChild(alert);

  setTimeout(() => {
    //bu fonksiyonda içine yazılan fonksiyon çalışmadan önce belirlenen süre kadar bekler
    alert.remove();
  }, 1500);

  console.log(alert);
}

function getTodosFromStorage() {
  //storageden todoları alma
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}

function addTodoToStorage(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
  /*bu fonkla beraber herhangi bir veri girildiginde otomatik olarak local storageye yazılacaktır
  fakat simdi de sayfa yüklendiginde  verileri local storageden alıp tekrar arayüze ekleme işlemini yapacak koldar yazılmalı */
}

//sayfa yüklendiginde oluşan event domcontentloaded eventiyle sayfa yüklenince çalışacak kodları yazabiliriz
function loadAllTodosToUI() {
  let todos = getTodosFromStorage();
  //storageden todoları getirdik su an dizide tutuyoruz
  todos.forEach(function (todo) {
    //todo parametresi her bir indeksi tek tek dolaşıp degerlerini okuyor
    addTodoToUI(todo);
  });
}

//todoları arayüzden ve storageden silmemiz gerekiyor tuşa basıldıgında
function deleteTodo(e) {
  //arayüzden
  //burada e objesinin target ozelligi sayesinde o element içinde nereye tıklandıgını bilebiliyoruz
  if (e.target.className === "fa fa-remove") {
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    e.target.parentElement.parentElement.remove();
    showAlert("success", "Todo başarıyla silindi");
  }
}
function deleteTodoFromStorage(deleteTodo) {
  //storageden
  let todos = getTodosFromStorage();

  todos.forEach(function (todo, index) {
    //forEach dongusunde ilk parametre elemanı ikincisi ise indeksi verir
    if (todo === deleteTodo) {
      todos.splice(index, 1); //splice metodu indeksi ve verilen indeksten itibaren kaç tane silinecegini belirtir
    }
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
