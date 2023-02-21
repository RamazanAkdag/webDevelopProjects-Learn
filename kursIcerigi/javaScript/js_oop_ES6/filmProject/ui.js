class UI {
  addFilmToUI(newFilm) {
    const filmList = document.querySelector("#films");
    filmList.innerHTML += `<tr>
                            <td><img src="${newFilm.url}" style="width : 150px; height :200px" class="img-fluid img-thumbnail"></td>
                            <td>${newFilm.name}</td>
                            <td>${newFilm.director}</td>
                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                           </tr>`;
    //console.log(filmList);
    this.showAlert("success", "film başarıyla arayüze eklendi...");
  }

  showAlert(type, message) {
    /*<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div> */
    const cardBody = document.querySelectorAll(".card-body")[0];
    const newAlert = document.createElement("div");
    newAlert.appendChild(document.createTextNode(message));
    newAlert.className = `alert alert-${type}`;
    cardBody.appendChild(newAlert);

    setTimeout(function () {
      newAlert.remove();
    }, 1500);

    console.log(newAlert);
  }

  deleteFilmFromUI(del) {
    del.parentElement.parentElement.remove();
  }

  clearFilmsFromUI() {
    const filmList = document.querySelector("#films");
    while (filmList.firstElementChild != null) {
      filmList.removeChild(filmList.firstElementChild);
    }
  }
}
