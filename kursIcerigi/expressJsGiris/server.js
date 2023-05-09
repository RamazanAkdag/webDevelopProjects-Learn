const express = require("express");
const acControl = require("./middleware");

const app = express();
const users = [
  { id: 1, name: "Mustafa Murat Coşkun", place: "Ankara" },
  { id: 2, name: "Serhat Say", place: "Istanbul" },
];

const PORT = 5000;
//app.use(acControl.accessControl); //------------->>>>>>>>>>uygulama kapsamında tüm routerlarda çalışacaksa üst kısımda belrtilir

//Get Request
//localhost:5000/users
app.get(
  "/users",
  acControl.accessControl /*buraya yazınca sadece buraya get gelince çalışır*/,
  (req, res, next) => {
    //------------->>>>>>>>>>>>>>>eğer sadece userse get request geldiğinde çalışmasını istiyorsak
    //sayfamıza get request olduğunda bu fonksiyon çalışır

    //res.send("<h1>Hello express</h1>");
    res.json(users);
  }
);
app.get("/products", (req, res, next) => {
  res.send("products");
});

app.use(express.json());
app.post("/users", (req, res, next) => {
  users.push(req.body);
  res.json({
    success: true,
    data: users,
  });
});

app.put("/users/:id", (req, res, next) => {
  const params = parseInt(req.params.id);
  //console.log(req.body);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i] = {
        ...users[i],
        ...req.body,
      };
    }
  }
  res.json({
    success: true,
    data: "put request",
  });
});

app.listen(PORT, () => {
  console.log("server started : " + PORT);
});
