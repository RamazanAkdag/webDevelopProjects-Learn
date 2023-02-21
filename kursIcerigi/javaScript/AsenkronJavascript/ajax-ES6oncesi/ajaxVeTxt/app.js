/*HTTP status
    200 - ok
    403 - forbidden
    404 - not found
    505 - internal server error
*/
// readyStates	Holds the status of the XMLHttpRequest : :
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click", function () {
  //xmlhttprequest objesi üretmemiz gerekiyor
  const xhr = new XMLHttpRequest();

  //onreadystatechange yerine onload özelliğine atanacak fonk direk response hazır oldugunda çalıştırılabilir
  xhr.onprogress = function () {
    //process state 3 oldugunda çalışır
    console.log("process işleniyor...  :", this.readyState);
  };
  xhr.onload = function () {
    if (this.status == 200) {
      //sadece herhangi bir sıkıntı olmadan verimiz geldiginde çalışır
      //veriyi divimize yazalım
      document
        .getElementById("ajax")
        .appendChild(document.createTextNode(this.responseText));
    }
  };

  xhr.open("GET", "example.txt", true); //bu fonksiyona verilen ilk parametre ne iş yapılacagını gösterir
  //2. parametre lokasyon belirtir nereden işlem yapılacagı ile ilgiili
  //3. parametre de asenkronize mi oldugunu gösterir yani true girilirse bu işlem asenkronize olacaktır,

  //   xhr.onreadystatechange = function () {//onreadystatechange ye fonksiyon atayıp işlemin hazır olup olmadıgını kontrol eski bir yöntemdir onun yerine
  //     if (this.status == 200 && this.readyState == 4) {
  //       //statu 200 ise işlem başarılı ve ready state 4 ise işlemler tamam ve response elimizde demektir
  //       //response hazır
  //       console.log(this.responseText);
  //     }
  //     //console.log("ready state : " + xhr.readyState);
  //   };

  xhr.send();

  //console.log(xhr);
});
