class UI {
  addCustomerToUI(newCustomer) {
    //console.log(newCustomer);
    const customersTable = document.querySelector("#customers");
    console.log(newCustomer);
    customersTable.innerHTML += `<tr id="customer-item">
    <td>${newCustomer.CustomerName}</td>
    <td>${newCustomer.CustomerGSM}</td>
    <td><a href="#" id = "delete-customer" class = "btn btn-danger">kaydı Sil</a></td>
  </tr>`;
  }

  removeCustomerFromUI(removeElement) {
    removeElement.remove();
  }

  removeAllCustomersFromUI() {
    const customersTable = document.querySelector("#customers");
    while (customersTable.firstElementChild != null) {
      customersTable.removeChild(customersTable.firstElementChild);
    }
  }

  showAlert(type, message) {
    const alertArea = document.querySelectorAll(".card-body")[0];
    /*<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div> */
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.role = "alert";
    const alertMessage = document.createTextNode(message);
    alert.appendChild(alertMessage);
    alertArea.appendChild(alert);

    setTimeout(function () {
      alert.remove();
    }, 1500);

    console.log(alert);
  }
}
