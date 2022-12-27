let value;

const numbers = [45, 56, 33, 23, 44, 35, 5];
const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);
/*yukarıda oluşturdugumuz 2 dizi de aynı. yani bir dizi bu varyasyonlarla oluşturulabilir */

const langs = ["python", "java", "c++", "javascript"];

const a = ["merhaba", 22, null, undefined, 3.14];

value = numbers.length;

//son elemanı alma
value = numbers[numbers.length - 1];

//herhangi bir indeksteki degeri degitirme
numbers[2] = 1000;
value = numbers;

//index of

value = numbers.indexOf(1000); //1000 degerinin dizide kacıncı indexte oldugunu bulur

//arrayın sonuna degre ekleme - push metodu
numbers.push(31);
value = numbers;
//arrayın basına ekleme - unshift
numbers.unshift(2000);
//sondan deger atma - pop metodu
//bastan degr atma - shift metodu

//belirli indexler arasındaki derleri atma - splice
numbers.splice(0, 3); //0 - 1 - 2 . indexler atılır

//ters cevirme - reverse

//sıralama metodu - sort
/* !!!!!! sort fonksiyonu ilk rakama göre sıralama yapar (küçükten büyüğe) yani dizinin elemanları 25 ve 11 olursa 11 25 şeklinde sıralar cunku 1 2 den 
kucuktur seklinde bakar  !!!! */
//direkt olarak sayıları buyukten kucuge veya kucukten buyuge sıralamak için
value = numbers.sort(function (x, y) {
  return x - y; //kucukten buyuge sıralamak için boyle tam tersi icin de y-x yazmak yeterlidir
});

console.log(value);
