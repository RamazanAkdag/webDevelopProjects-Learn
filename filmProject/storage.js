function Storage() {}

Storage.prototype.addFilmToStorage = function (newFilm) {};
Storage.prototype.getFilmsFromStorage = function () {
  let films;
  if (localStorage.getItem("films") === null) {
    //local storage boşsa
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
};
