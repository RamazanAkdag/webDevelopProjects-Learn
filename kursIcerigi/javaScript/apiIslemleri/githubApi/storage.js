class storage {
  static getSearchedUsersFromStorage() {
    //kullanıcıları al
    let users;
    if (localStorage.getItem("searched") === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("searched"));
    }

    return users;
  }
  static addSearchedUserToStorage(username) {
    //kullancı ekle
    let users = this.getSearchedUsersFromStorage();
    if (users.indexOf(username) === -1) {
      //indexoftan dönen deger -1 dizinin içinde o deger yok demektir
      users.push(username);
    }
    localStorage.setItem("searched", JSON.stringify(users));
  }
  static clearAllSearchedUsersFromStorage() {
    localStorage.removeItem("searched");
  }
}
