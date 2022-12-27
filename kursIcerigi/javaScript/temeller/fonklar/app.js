function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
  //   if (typeof name === "undefined") name = "Bilgi yok";
  //   if (typeof age === "undefined") age = "Bilgi yok"; bunlaarı bu şekilde yazmak yerine parametra kısmına varsayılan degrleri atayabilirsin

  console.log(`isim : ${name} \n yaş : ${age}`);
}

merhaba("ramo");

//hemen cagırılan fonksiyon ifadesi. sadece yazıldıgı yerde kullanılma işlevi olan fonksiyonlar
(function (name) {
  console.log("merhaba " + name);
})("murat");

//fonksiyonlu objeler oluşturma

const database = {
  host: "localhost",
  add: function () {
    console.log("eklendi..");
  },
  get: function () {
    console.log("elde edildi...");
  },
};
