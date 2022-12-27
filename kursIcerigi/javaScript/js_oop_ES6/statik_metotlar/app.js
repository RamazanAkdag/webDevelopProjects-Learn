class matematik {
  static cube = (x) => x * x * x;
}
/*normalde class içinde bir fonku kullanmak için obje olusturmak gerekir fakat bazı durumlarda 
mantıksal açıdan obje oluşturmaya gerek olmadıgı durumlar olacaktır(ornegin class icindeki sadece bir fonksiyon tek bir defa kullanılmak isteniyor)
bu durumda o kullanılacak metotları static olarak tanımlarsak obje olusturmaya gerek olmadan dogrudan class ismiyle erişim yapabiliriz... */

console.log(matematik.cube(3));
