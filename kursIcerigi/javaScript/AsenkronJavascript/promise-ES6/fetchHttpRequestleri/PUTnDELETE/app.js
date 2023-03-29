class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => resolve("silme işlemi başarılı"))
        .catch((err) => reject(err));
    });
  }
}

const req = new Request();

// req
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((data) => console.log(data));
//fakat bu şekilde yaparsak get fonkundan aldıgımız degerleri fonk dısında kullanamayız bu yuzden bir promise objesi olarak döndürmemiz gerkiyor
//kullanabilmemiz için

/*eger thenin içinde albums = data esitleyip thenin dısında da console log albums yazarsan eger apiden istegi alamadıysa bile asenkron bir şekilde
çalışacagından albums degiskenini tanımsız olarak yazdırır */

// req
//   .post("https://jsonplaceholder.typicode.com/albums", {
//     userId: 10,
//     title: "loremRamazanAkdag",
//   })
//   .then((response) => console.log(response));

// req
//   .put("https://jsonplaceholder.typicode.com/albums/1", {
//     userId: 10,
//     title: "tarkan karma",
//   })
//   .then((data) => console.log(data));
req
  .delete("https://jsonplaceholder.typicode.com/albums/1")
  .then((data) => console.log(data));
