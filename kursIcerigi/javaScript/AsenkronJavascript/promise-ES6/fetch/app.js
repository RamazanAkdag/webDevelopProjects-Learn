function getTextFile() {
  //txt dosyasından bu şekilde veri çekebiliriz
  fetch("exam.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

getTextFile();
