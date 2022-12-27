const person = {
  name: "mustafa murat",
  salary: 3000,
  age: 25,
};

const langs = ["python", "javscript", "C++", "Php"];

const name = "mustafa";

for (let prop in person) {
  console.log(prop, " : ", person[prop]);
  /*console.log(prop) şeklinde kullanırsak obje içerisindeki özeliklerin isimlerini konsola yazmış oluruz 
    person[prop] şeklinde kuklanımdadao özelliklerin degerini bastırır
    for in döngüsünde tanımladıgımız degişken objenin özelliklerin etek tek sahip olur ve yazdırma veya işlem yapabilmemizi saglar
  */
}
for (let kar in name) {
  console.log(kar); //indexler arasında geziniyoruz ve index nolar yazılıyor
}

for (let char of name) {
  /*karakterler arasında gezinip karakter noları yazılıyor*/
  console.log(char);
}
