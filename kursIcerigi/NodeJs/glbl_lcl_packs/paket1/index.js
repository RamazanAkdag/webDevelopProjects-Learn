console.log("paket1");

//npm install komutunu paket 1in içinde yadık ve kaet 1 iniçine kuruldu o zaman paket 1 in içine yerelbir paket olarak kurulmuş olur ve paket
//dışından erişilemez

/*eger birden çok proje içerisinde aynı paket kullanılması gerekirse bunu global bir paket olarak indirmek daha dogru olacaktır */

/*global paketlerin pcde tek bir yere kurulu olması gerkir onu da cmdye 
npm root -g
 yazarak görebilirsiniz
fakat yerel olarak kurmak ürün geliştirme açısından daha uygundur o yüzden sadece geliştirme ortamında kullanılacak
ortak modülleri global olawrak kurmak gerek
global olarak kurmak için
npm install -g simple-is

*/

/*js aradıgı dosyayı bulmak için ilk önce dosyadaki yerel node modules klasorune bakıcak eger orada yoksa global node modules klasorune bakacak  */

const is = require("simple-is");
