let value;

const todoList = document.querySelector(".list-group");

const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;

value = todoList.childNodes; //burada 9 tane dugum getiriyor sebebi aray bıraktıgımız boşlukları da bir node olarak kabulş edip yazıyor
//eger boslukları almasını istemiyosak
value = todoList.children;
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "degisti"; //burada direk node içerigini degistirdi

value = cardrow;
value = cardrow.children;
value = cardrow.children[2];
value = cardrow.children[2].children[1].textContent = "burası da degsiti"; //cardrowun cocugunu aldık yani card-body ve onun da 1. cocugu h5 etiketinin
//yazı içerigi degisti

value = todoList.children.length;

value = cardrow;
//bunun kapsayan bi üst element için
value = cardrow.parentElement;

//element kardeşleri//ebeveynleri ortak aynı seviyede olan elementler

value = todo;

value = todo.previousElementSibling; //önceki kardeşi

value = todo.nextElementSibling;

console.log(value);
