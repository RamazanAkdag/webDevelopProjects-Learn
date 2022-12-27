let value;

value = document;

//scriptler

value = document.scripts; //html sayfasındaki script elementleri

value = document.scripts.length; //onların sayısı

//linkler

value = document.links;

value = document.links[0];

value = document.links[document.links.length - 1].getAttribute("href"); //class href id vb ogeleri alabilirsin

value = document.links[document.links.length - 1].className;//classsları string biçiminde gösterir

value = document.links[document.links.length - 1].classList;


console.log(value);
