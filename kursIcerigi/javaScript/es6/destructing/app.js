//destructing

//let number1, number2;

//arr = [100, 200, 100];

// number1 = arr[0];
// number2 = arr[1];

// console.log(number1,number2);//bu eski bir kullanım şimdi bunu bir de destructing kullanarak yapalım

//[number1, number2] = arr;
/*bu ifade aslında
[number1,number2] = [100,200,300]  şeklinde görülür ve soldaki ifadenin 0 ı  sagdakinin 0 ına eşitlenir*/

//console.log(number1, number2);

//obje destructing

// const numbers = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40,
//   e: 50,
// };

// const { a, c, e } = numbers;

// console.log(a, c, e);

//function destructing

const getlangs = () => ["python", "java", "C++"]; //bir array return eden getLangs fonksiyonu

const [lang1, lang2, lang3] = getlangs();

console.log(lang1, lang2, lang3);

const person = {
  name: "mustafa murat coskun",
  year: 1993,
  salary: 3000,
  showInfos: () => console.log("bilgiler gösteriliyor..."),
};

const {
  name: isim,
  year: yil,
  salary: maas,
  showInfos: bilgileriGoster,
} = person;

bilgileriGoster();
