const newLink = document.createElement("a");

const cardBody = document.querySelectorAll(".card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";

newLink.href = "https://www.google.com";
newLink.target = "_blank";
//textcontent degiskeniyle bir deger ataması yapılınca o etiketin tüm içerigi her seyi silinip yer,ne yazılan deger girilir

//onun yerine textnode olusturmamız gerekiyor

const text = document.createTextNode("naber");

cardBody.appendChild(text); //cardbody nin sonuna element eklemek için kullanılır

newLink.appendChild(document.createTextNode("farklı sayfaya git"));

cardBody.appendChild(newLink);

//burada yazılan kodlar veya benzerleri ile sayfaya dinamik bir şekilde element eklenebilir

console.log(newLink);
