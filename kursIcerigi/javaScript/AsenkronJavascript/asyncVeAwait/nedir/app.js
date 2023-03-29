// function test(data) {
//   return data;
// }

// console.log(test("merhaba"));

// //normal bir fonksiyon yazdıgımızda fonksiyon her turlu degeri return edebilir fakat

// async function test(data) {
//   return data;
// }
// ///bu şekilde bir kullanım yaparsak fonksiyon daima promise dönücek demektir ve return edilen datayı promise olarak döndürücek

// async function test2() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("bu bir degerdir");
//     }, 5000);
//   });

//   let response = await promise;
//   //burada promiseden olumlu bir sonuc gelmesini 5 sn bekleyecek yani iş bitene kadar ve olumlu sonucu alacak

//   console.log("naber");
//   return response; //burda sonuc yazdırıyoruz
// }

// //await sadece async function içinde kullanılır

// test2().then((response) => console.log(response));

async function testData(data) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "string") {
        resolve(data);
      } else {
        reject(new Error("lütfen string bir deger girin"));
      }
    }, 5000);
  });

  const response = await promise;
  return response;
}

testData("thriller").then((data) => console.log(data));
