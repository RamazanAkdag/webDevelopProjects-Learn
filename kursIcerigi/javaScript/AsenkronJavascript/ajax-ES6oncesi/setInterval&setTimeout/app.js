//settimeout fonku içine gönderilen fonku içine girilen süre kadar bekledikten sonra çalıştırır

//setInterval fonku da içine girilen fonku her içine girilen sürede bir çalıştırır

let value = setInterval(function () {
  let date = new Date();
  console.log(
    date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()
  );
}, 1000);

document.getElementById("btn").addEventListener("click", function () {
  clearInterval(value);
  console.log("durduruldu...");
});
