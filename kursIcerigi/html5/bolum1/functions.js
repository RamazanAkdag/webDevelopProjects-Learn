var sayi1 = 6;
var sayi2 = 16;
var sayi3 = 3;
var sayi4 = 48;
var sayi5 = 49;
var sayi6 = 11;
var sayi7 = Math.ceil(Math.random() * 49);
// ceil tam sayıya yuvafrlar random 0 1 arası sayı uretir

console.log("kolon : " + sayi1 + " " + sayi1 + " ");

function sayiUret(ustLimit) {
  console.log(Math.ceil(Math.random() * ustLimit));
}

sayiUret(40);
