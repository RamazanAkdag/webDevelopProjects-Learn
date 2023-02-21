// function getData(data) {
//   //promise objesi döndüren fonk

//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       //resolve("olumlu sonuc");
//       if (typeof data === "string") {
//         //başarılı
//         resolve("olumlu sonuc");
//       } else {
//         //hata
//         reject(new Error("nanay"));
//       }
//     }, 3000);
//   });
// }

// //   getData("merhaba").then(function (response) {
// //     //then fonku eger fonksiyonun içinden olumlu soncu döndüyse çalışır
// //     //resolve fonkuyla gönderilen deger bizim promiseResult özelliğimizdir
// //     console.log(response);
// //   })

// getData(1)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });
//then ile catch aynı yerde kullanılabilr tek tek yazmana gerek yok
//olumluysa then olumsuzssa catch calısır

function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number + 2);
      } else {
        reject(new Error("Lütfen Bir sayi girin..."));
      }
    }, 3000);
  });
}

addTwo("selam")
  .then((response) => {
    console.log(response);
    return response + 2;
  })
  .then((response2) => console.log(response2))
  .catch((err) => console.error(err));
//2. kullandıgımız then 1. then in return ettigi degeri parametre alıcak

//promiselerde 1 tane catch - birden fazla then kullanılabilir
