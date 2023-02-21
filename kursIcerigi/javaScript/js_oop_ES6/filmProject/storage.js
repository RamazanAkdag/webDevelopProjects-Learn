class storage {
  addFilmToStorage(newFilm) {
    let films = this.takeFilmsFromStorage();
    films.push(newFilm);

    localStorage.setItem("films", JSON.stringify(films));
  }
  takeFilmsFromStorage() {
    let films;

    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
  }

  deleteFilmFromStorage(name) {
    let films = this.takeFilmsFromStorage();

    films.forEach(function (film, index) {
      if (film.name === name) {
        films.splice(index, 1);
      }
    });

    localStorage.setItem("films", JSON.stringify(films));
  }

  clearFilmsFromStorage() {
    localStorage.removeItem("films");
  }
}
