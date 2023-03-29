function getTextFile() {
  //txt dosyasından bu şekilde veri çekebiliriz
  fetch("exam.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

getTextFile();

function getJsonFile() {
  fetch("exam.json").then((jsonObject) => {
    console.log(jsonObject.json());
  });
}
getJsonFile();

function getExternalAPI() {
  fetch("https://api.exchangeratesapi.io/latest")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(() => console.error("hata"));
}
getExternalAPI();
