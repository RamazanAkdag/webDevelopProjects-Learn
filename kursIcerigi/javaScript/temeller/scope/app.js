//globalde oluşturulan degiskenler için global scope kavramı kullanılır
var value1 = 10;
let value2 = 20;

const value3 = 30;

// function func() {
//   //burda oluşturulan degiskenler fonksiyon cagırıldıgı zaman kullanılır ve sonra bellekten silinir
//   var value1 = 40;
//   let value2 = 50;

//   const value = 60;
// }
//func();

//block scope if vb bloklareın icinde olusuturulan degiskenler

// if (true) {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }

// console.log(a);//konsola yazıldı (yani blogun dısında da var olmaya devam etti)
// console.log(b);//konsola yazılmadı
// console.log(c);//konsola yazılmadı

if (true) {
  var value1 = 40;
  let value2 = 50;
  const value3 = 60;

  console.log(value1, value2, value3);
}

console.log(value1);
console.log(value2);
console.log(value3);
//son kısımda 40 20 30 cıktısı aldık cunku var value1 olarak tanımladıgımız deger aslında kodun basında tanımladıgımız value1 in degerini degistirdi
//fakat let value2 farklı bir degisken olarak olusturuldu ve blogun icinde kaldı dısarıyı etkilemedi value2 yine kodun basındaki degeriyle kaldı
//const da aynı şekilde durumdan etkilenmedi blogun icinde tanımlanan blogun icinde kaldı
