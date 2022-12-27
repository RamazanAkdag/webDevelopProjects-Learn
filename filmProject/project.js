const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const deleteAllButton = document.querySelector("#clear-films");
//UI objesini başlatma
const ui = new UI();

//storage objesi uret

const storage = new Storage();
// tüm eventleri yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    //hata
    ui.displayMessages(
      "eklenecek film için yeterli bilgi yok. Lütfen tüm alanları doldurunuz..",
      "danger"
    );
  } else {
    // yeni film
    const newFilm = new Film(title, director, url);
    ui.displayMessages("Film başarıyla eklendi...", "success");

    ui.addFilmToUI(newFilm); // arayüze film ekleme
    //storage.addFilmToStorage(newFilm); //storage ye
  }

  ui.clearInputs(titleElement, directorElement, urlElement);

  e.preventDefault();
}
