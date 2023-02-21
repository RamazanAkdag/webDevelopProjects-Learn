const filter = document.querySelector("#filter");

filter.addEventListener("focus", run);
filter.addEventListener("blur", run);
filter.addEventListener("paste", run);

function run(e) {
  console.log(e.type);
}

// run = (e) => {
//   console.log(e.type);
// };
