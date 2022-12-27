//spread operator

const langs = ["python", "java", "C", "C++"];

console.log(langs[0], langs[1], langs[2], langs[3]);

//sprad operatoru sayesinde yukarıdaki ifadenin aynısı şu şekilde olur

console.log(...langs);

const langs2 = ["C#", "JavaScript", ...langs]; //bu şekilde de langs2 dizisine langs dizisinin tüm üyeleri yazıldıgı indexten itibaren atanmış oldu

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, b, ...numbers2] = numbers; //numbersin 0 ve 1 indisleri a ve b ye eşlendi

//sprad operatoruyle olusturdugumuz numbers2 dizisine 0 ve 1 indisleri haric digerleri üye olarak atandı

const addNumbers = (a, b, c) => console.log(a + b + c);

const nums = [100, 200, 300, 500];

addNumbers(...nums); //nums dizisinin ogeleri parametre olarak gitti 3 parametre alabildigi için ilk 3 ü  gitti
