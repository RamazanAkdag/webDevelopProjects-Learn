//browserin local storagesinde tutulan veriler tarayıcı kapansa bile orda tutulur el ile silinmedigi surece veya js tarafında silinmedikçe
//session storage ise oturum suresi tarayıcı açıkken tutulur

///session storage - key ve value
console.log(window); //session storage window objemiz uzerinde bulunan bir objedir

const add = document.querySelector("#add");

const del = document.querySelector("#delete");

const clear = document.querySelector("#clear");

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

function addItem(e) {
  sessionStorage.setItem(addKey.value, addValue.value); //session storageye veriler depolanıyor ve sayfa kapatılınca veriler session strageden temizleniyor
}

function deleteItem(e) {
  sessionStorage.removeItem(deleteKey.value);
}

function clearItems(e) {
  sessionStorage.clear();
}
