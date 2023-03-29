const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");

const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();
eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}
function clearAllSearched() {
  storage.clearAllSearchedUsersFromStorage();
  while (lastUsers.firstElementChild != null) {
    //console.log(lastUsers.firstElementChild);
    lastUsers.firstElementChild.remove();
  }
}
function getAllSearched() {
  let users = storage.getSearchedUsersFromStorage();

  let result = "";
  users.forEach((username) => {
    result += `<li class="list-group-item">${username}</li>`;
    //console.log(result);
  });
  document.getElementById("last-users").innerHTML += result;
}
function getData(e) {
  let username = nameInput.value.trim();

  if (username === "") {
    alert("lütfen geçerli bir kullanıcı adı giriniz..");
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === "Not Found") {
          //kullanıcı adı bulunamadı
          ui.showError("Kullanıcı bulunamadı...");
        } else {
          ui.addSearchedUsersToUI(username);
          storage.addSearchedUserToStorage(username);
          ui.showUserInfo(response.user);
          ui.showRepoInfo(response.repo);
        }
      })
      .catch((err) => ui.showError(err));
  }

  ui.clearInput();
  e.preventDefault();
}
