//callback funcs

// const langs = ["python", "java", "c++"];

// langs.forEach(function (lang) {
//   console.log(lang);
// });

// function process1(callback) {
//   setTimeout(() => {
//     console.log("process 1");
//     callback();
//   }, 3000);
// }

// function process2() {
//   console.log("process 2");
// }

// process1(process2); //process 1 önce çağırılmış olsa bile javascript timeout suresini beklemez ve 2. fonksiyona gider süresi dolunca 1. fonk da çalışır
//bu şekilde asenkron işlem yapılmış olur

const langs = ["python", "java", "c++"];

function addLang(lang, callback) {
  setTimeout(() => {
    langs.push(lang);
    console.log("eklendi");
    callback();
  }, 2000);
}

function getAllLangs() {
  setTimeout(function () {
    langs.forEach(function (lang) {
      console.log(lang);
    });
  }, 1000);
}

addLang("javascript", getAllLangs);
//getAllLangs();
