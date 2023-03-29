class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

const req = new Request();

req
  .get("https://jsonplaceholder.typicode.com/albums")
  .then((data) => console.log(data));
//fakat bu şekilde yaparsak get fonkundan aldıgımız degerleri fonk dısında kullanamayız bu yuzden bir promise objesi olarak döndürmemiz gerkiyor
//kullanabilmemiz için

/*eger thenin içinde albums = data esitleyip thenin dısında da console log albums yazarsan eger apiden istegi alamadıysa bile asenkron bir şekilde
çalışacagından albums degiskenini tanımsız olarak yazdırır */
