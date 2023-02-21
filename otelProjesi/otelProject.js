const customerForm = document.querySelector("#musteriEkle");
const nameElement = document.querySelector("#musteriAdi");
const gsmElement = document.querySelector("#musteriGsm");
const scndCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");

//ui objesi başlatma
const ui = new UI();

//storage objesi başlatma
const storage = new Storage();

function eventListeners() {
  customerForm.addEventListener("submit", addCustomer);
  document.addEventListener("DOMContentLoaded", loadCustomersFromStorage);
  scndCardBody.addEventListener("click", scndCardBodyManager);
  filter.addEventListener("keyup", filterCustomers);
}
eventListeners();

function filterCustomers(e) {
  const customerList = document.querySelectorAll("#customer-item");
  const filterValue = filter.value.toLowerCase();
  customerList.forEach(function (customer) {
    const text = customer.firstElementChild.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      //bu element arananlardan degil
      customer.setAttribute("style", "display : none !important");
    } else {
      //aranan harflerle uyuşuyor
      customer.setAttribute("style", "display : block");
      customer.setAttribute("style", "justify-content : between");
    }
  });
}

function scndCardBodyManager(e) {
  if (e.target.id === "delete-customer") {
    //ilgili customer silme işlemi
    ui.removeCustomerFromUI(e.target.parentElement.parentElement);

    storage.removeCustomerFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    ui.showAlert("success", "Başarılı : kayıt silinidi...");
  } else if (e.target.id === "clear-customers") {
    ui.removeAllCustomersFromUI();
    storage.removeAllCustomersFromStorage();
  }

  e.preventDefault();
}

function loadCustomersFromStorage() {
  let customerArray = storage.getAllCustomersFromStorage();

  customerArray.forEach(function (customer) {
    addToUI(customer);
  });
}

function addCustomer(e) {
  //console.log(nameElement.value);
  const name = nameElement.value.trim();
  const gsm = gsmElement.value.trim();
  if (name === "" || gsm === "") {
    //hatalı giriş
    ui.showAlert(
      "danger",
      "Hata : Yanlış bir kayıt girişi yapıldı! işlem başarısız..."
    );
  } else {
    const newCustomer = new Customer(name, gsm);
    addToUI(newCustomer);
    storage.addCustomerToStorage(newCustomer);
  }
  nameElement.value = "";
  gsmElement.value = "";
  e.preventDefault();
}

function addToUI(newCustomer) {
  ui.addCustomerToUI(newCustomer);
  ui.showAlert("success", "Başarılı :  Yeni kayıt oluşturuldu...");
}
