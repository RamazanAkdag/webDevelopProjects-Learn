// const merhaba = function(){
//     console.log("merhaba");
// }
/*js de bu şekild efonksiyon tanımlanabilir */

//Veya----------------

// const merhaba = () => {
//   //bu fonksiyonla yukarıda tanımladıgımız fonlksiuon aynı işlevi görür bu şekilde bir yazım daha kısa ve kolay yazım saglar
//   console.log("merhaba");
// };

const merhaba = (firstName) => {
  //fonksiyon tek parametre alıyorsa yay ayrac icine yazmak zorunda degilsin
  //yani merhaba = firstname =>{   } şeklinde de olur

  console.log("merhaba", firstName);
};
/*fonksiyon tek satırlık işlem yapıyorsa fonksiyon suslu parantezi içerisine almak zorunda da degilsin */
merhaba("murat");

const cube = (x) => x * x * x;
//fonksiyon aslında return x*x*x yapıyor fakat tek bir işlem yaptıgı için süslü paarntez ve return yazmaya da gerek yok
