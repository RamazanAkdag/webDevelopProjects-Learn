//bubbling olayı şu şekilde olur ornegin tıklama eventini dusunelim. tıklama eventini bir child node da uygularsan tıklama eventi haliyle onun parentına aynı
//aynı anda onun da parentına derken en üst node a kadar gelir

//Event bubbling
// document.querySelector(".container").addEventListener("click", function () {
//   console.log("div container");
// });

// document.querySelector(".card.row").addEventListener("click", function () {
//   console.log("card row");
// });

// document
//   .querySelectorAll(".card-body")[1]
//   .addEventListener("click", function () {
//     console.log("card body");
//   });

//Event capturing ////////////////////

document.querySelectorAll(".card-body")[1].addEventListener("click", run);

function run(e) {
  if (e.target.className === "fa fa-remove") {
    console.log("silme işlemi");
  }
  if (e.target.id === "filter") {
    console.log("filtreli arama işlemi");
  }
}
