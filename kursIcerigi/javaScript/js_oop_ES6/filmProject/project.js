const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];

//ui objesini başlatma
const ui = new UI();

//storage objesi üret
const st = new storage();
//tüm eventleri yükleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", loadFilmsFromStorage);
  secondCardBody.addEventListener("click", deleteFilm);
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    st.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    ); /*silme butonunun bulundugu td den
    2 td geri gelirsek filmin isminin bulundugu tdye erişmiş olacagız ve bu isimle localStorageden silme işlemini yapacagız */
    ui.deleteFilmFromUI(e.target);
  }
  if (e.target.id === "clear-films") {
    ui.clearFilmsFromUI();
    st.clearFilmsFromStorage();
  }
}

function loadFilmsFromStorage() {
  let films = st.takeFilmsFromStorage();

  films.forEach(function (film) {
    ui.addFilmToUI(film);
  });
}

function addFilm(e) {
  const title = titleElement.value.trim();
  const director = directorElement.value.trim();
  const url = urlElement.value.trim();

  if (title === "" || director === "" || url === "") {
    //hata
    ui.showAlert(
      "danger",
      "hatalı giriş! tüm kısımları eksiksiz girdiginizden emin olup tekrar deneyin."
    );
  } else {
    const newFilm = new film(title, director, url);
    ui.addFilmToUI(newFilm); //arayüze film ekleme
    st.addFilmToStorage(newFilm); //stroage a film ekleme
  }

  titleElement.value = "";
  directorElement.value = "";
  urlElement.value = "";

  e.preventDefault();
}
