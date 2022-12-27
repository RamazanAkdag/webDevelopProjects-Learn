//setler
/*setler dizilere çok benzer fakat aynı degeri 2 defa taşımazlar ornegin içinde bir tane 1 degeri varsa başka 1 degeri bulunamaz */

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add("mustafa");
myset.add(true);
console.log(myset);

const myset2 = new Set([100, "mustafa", true]);

console.log(myset2);

console.log(myset2.has("mustafa")); //setin içinde aranan deger varsa true

myset2.forEach(function (value) {
  console.log(value);
});

for (let value of myset) {
  console.log(value);
}

//setten de array olusturulabilir
const array = Array.from(myset);
array.forEach(function (val) {
  console.log(val);
});
