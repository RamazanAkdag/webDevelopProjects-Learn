let value;

const now = new Date(); //şu anki zamanı almamızı saglar

const date1 = new Date("9-19-1993 06:35:00");
const date2 = new Date("september 19 1993");
const date3 = new Date("9/19/1993");

value = date1;

value = date1.getMonth(); //kacıncı ay 0 dan baslayarak
value = date1.getDate(); //ayın kacıncı gunu 1 den baslayarak (normal)
value = date1.getDay; //haftanın kacıncı gunu

value = date1.getHours(); //saati verir
value = date1.getMinutes(); //dakikayı verir
//bunlar gibi saniye milisaniye gibi varyasyonlarda zaman bilgisi alabilirsin

date1.setMonth(5); //date1 zaman objesinin ay ı için deger ataması yaptık
//hepsine bu şekil deger ataması yapılabilir veya olan deger degistirilebilir ama butun aylar bi önceki ayın numarasına sahip cunku indeksler 0 dan
//baslıyor

console.log(now);

console.log(value);
