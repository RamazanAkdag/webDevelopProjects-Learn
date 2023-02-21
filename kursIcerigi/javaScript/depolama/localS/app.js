//local storage -array yazma
// const todos = ["todo 1", "todo 2", "todo 3"];
// localStorage.setItem("todos", JSON.stringify(todos)); //bu şekilde array şeklinde yazılabilir local storage ye

// //local storeden array şeklinde veri almak için de

// let value = localStorage.getItem("todos");
// //string bir deger olarak almak zorunda bu şekilde yazıldıgı zaman

// value = JSON.parse(localStorage.getItem("todos"));

// console.log(value);

//burda todo list projesinin girilen todolarını local storage ye atıcaz

const form = document.querySelector("#todo-form"); //burada form etiketini almamız gerek çünkü submit yapıldıgında bütün form bitmiş olur

const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodoToLS);

function addTodoToLS(e) {
  //formda submit olayı gerceklestiginde kendi sayfamıza yönlendiriliyoduk fakat o varsayılan özelliği engellemek için preventDefa
  //kullanıcaz
  const value = todoInput.value;
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(value);

  localStorage.setItem("todos", JSON.stringify(todos));

  todoInput.value = "";

  e.preventDefault();
}
