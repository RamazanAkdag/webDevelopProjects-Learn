//Ajax CallBack

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  //Get Request
  get(url, CallBack) {
    this.xhr.open("GET", url); //baglantı açık

    this.xhr.onload = function () {
      //bu fonksiyon xhr içindeki bir degre atandıgı için bu fonkun içinde kulllanılan this ifadeleri xhr yi gösterecektir
      if (this.status === 200) {
        const array = JSON.parse(this.responseText);
        CallBack(array);
        //console.log(array);
      } else {
        //hata
        CallBack("hata mesajı", null);
      }
    }; //ya da bu fonksiyona .bind(this) şeklinde dışarıdaki this ifadesini baglarsak sanki request objesi gösteriliyormuş gibi davranır yine

    this.xhr.send();
  }
}

const request = new Request();
request.get(
  "https://jsonplaceholder.typicode.com/posts",
  function (err, response) {
    if (err === null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);
