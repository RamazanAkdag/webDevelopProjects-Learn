const name = "Ramazan Fırat Akdağ";
const department = "Yazılım mühendisi";
const salary = "25.000 tl";

// const a =
//   "isim : " +
//   name +
//   "\n" +
//   "departman : " +
//   department +
//   "\n" +
//   "maaş : " +
//   salary +
//   "\n";

//console.log(a);

/*string oluştururken yukarıdaki yöntem biraz uzun ve kullanışsız olucaktır. bundan dolayı javasciptte template literal özelliği kullanacağız*/
/*o da şu şekildedir */
//*const b = `isim : ${name}\ndepartman : ${department}\nmaaş : ${salary}\n`;
/*stringi ";" tuşunun altgr ile kombinasyonu ile oluşan tırnak işaretinin arasına yazmalısıns*/
//console.log(b);

const html =
  "<ul>" +
  "<li>" +
  name +
  "</li>" +
  "<li>" +
  department +
  "</li>" +
  "<li>" +
  salary +
  "</li>" +
  "</ul>";

//document.body.innerHTML = html;

/*örneğin bu şekil bi html template oluşturman gerekti. Bunu böyle yazmak biraz zaman kaybettirebilir. template literal string ile oluşturalım bir de */
function a() {
  return "merhaba";
}
const html2 = `<ul>
                  <li>${name}</li>
                  <li>${department}</li>
                  <li>${salary}</li>
                  <li>${10 / 4}</li>
                  <li>${a()}</li>
                  </ul> `;

document.body.innerHTML = html2;

/*yine aynı şey oldu ama bu sefer çok daha kısa sürede hallettik */
