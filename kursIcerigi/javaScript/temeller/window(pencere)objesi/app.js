//console.log(window);

// const cevap = confirm("emin misiniz ?");

// console.log(cevap);

// if (cevap) {
//   console.log("silin gitsin");
// } else {
//   console.log("silmeyin");
// }

// const cevap = prompt("2 + 2 = ?");

// console.log(cevap);
// console.log(typeof cevap);

// if (cevap == "4") {
//   console.log("dogru");
// } else {
//   console.log("yanlış");
// }

let value;

value = window;

value = window.location;

value = window.location.host;

value = window.location.port;

value = window.location.href;

if (confirm("sayfa yenilensin mi ?")) {
  window.location.reload();
}

console.log(value);
