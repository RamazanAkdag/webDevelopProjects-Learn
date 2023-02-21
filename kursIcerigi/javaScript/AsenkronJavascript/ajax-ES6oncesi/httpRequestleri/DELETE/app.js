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
        //başarıyla request geldi
        const array = JSON.parse(this.responseText);
        CallBack(array);
        //console.log(array);
      } else {
        //hata
        CallBack("hata mesajı", null);
      }
    }; //ya da bu fonksiyona .bind(this) şeklinde dışarıdaki this ifadesini baglarsak sanki request objesi gösteriliyormuş gibi davranır yine

    this.xhr.send();
    /*get requestlerle biz bir web sayfasına erişiriz ve web sayfası bize bir html veya json verisi döndürür ve biz bu verileri kendi 
    programımızda kullanabiliriz */
  }

  //Post Request
  post(url, data, callBack) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json"); //içerisine json verisi gönderilecegini baştan belirtiyoruz

    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        //201 yapmamızın sebebi request başarılı ve yeni kaynak oluşturuldu mu diye kontrol yapmak
        //başarılı
        callBack(null, this.xhr.responseText);
      } else {
        callBack("PostRequestException : herhangi bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data)); //get request te biz siteye bir veri göndermediğimiz için send fonksiyonunnu n içini boş bırakıypruz
    //fakat post requestte amac veri göndermek oldugundan parametre vermemiz gerekiyor
    /*post requestler ile de biz bir siteye form verilerimizi veya json verilerimizi gönderebiliriz.
      get requestten farkı request header belirlememiz ve en son siteye bir veri göndermemiz
    */
  }

  //PUT Request
  /*put requestler alınan bir veriyi güncelleme işlevi görür yani içinde hem yabancı bir siteden veri alma ve veriyazma işlemleri de kullanılır
   */
  put(url, data, callBack) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-type", "application/json"); //içerisine json verisi gönderilecegini baştan belirtiyoruz

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        //get & putta 200 postta 201
        //başarılı
        callBack(null, this.xhr.responseText);
      } else {
        callBack("PutRequestException : herhangi bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data)); //get request te biz siteye bir veri göndermediğimiz için send fonksiyonunnu n içini boş bırakıypruz
  }
  //DELETE Request

  delete(url, CallBack) {
    this.xhr.open("DELETE", url); //baglantı açık

    this.xhr.onload = function () {
      if (this.status === 200) {
        //başarıyla request geldi
        const array = JSON.parse(this.responseText);
        CallBack(array);
        //console.log(array);
      } else {
        //hata
        CallBack("hata mesajı", null);
      }
    }; //ya da bu fonksiyona .bind(this) şeklinde dışarıdaki this ifadesini baglarsak sanki request objesi gösteriliyormuş gibi davranır yine

    this.xhr.send();
    /*get requestlerle biz bir web sayfasına erişiriz ve web sayfası bize bir html veya json verisi döndürür ve biz bu verileri kendi 
    programımızda kullanabiliriz */
  }
}

const request = new Request();

request.delete(
  "https://jsonplaceholder.typicode.com/albums/10", //id 10 olan ifadeyi silicez
  function (err, response) {
    if (err === null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);
