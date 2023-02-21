class Storage {
  getAllCustomersFromStorage() {
    let customerArray;
    if (localStorage.getItem("customers") === null) {
      //local storagede customers keyine sahip olan bir deger yok
      customerArray = [];
    } else {
      //aradıgımız sey burada
      customerArray = JSON.parse(localStorage.getItem("customers"));
    }
    return customerArray;
  }
  addCustomerToStorage(newCustomer) {
    let customerArray = this.getAllCustomersFromStorage();
    customerArray.push(newCustomer);
    localStorage.setItem("customers", JSON.stringify(customerArray));
  }
  removeCustomerFromStorage(removeName) {
    let customerArray = this.getAllCustomersFromStorage();
    customerArray.forEach(function (customer, index) {
      if (customer.CustomerName === removeName) {
        customerArray.splice(index, 1);
      }
    });
    localStorage.setItem("customers", JSON.stringify(customerArray));
  }

  removeAllCustomersFromStorage() {
    localStorage.removeItem("customers");
  }
}
