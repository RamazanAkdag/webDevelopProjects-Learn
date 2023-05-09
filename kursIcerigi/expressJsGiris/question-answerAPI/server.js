const express = require("express");
const dotenv = require("dotenv");
// const question = require("./routers/questions");
// const auth = require("./routers/auth");
//bu ikisini programın ana dosyasında bu şekilde yönlendirme yapmak yerine routers içerisinde bir ana dosya oluşturup onun içinde gereken yönlendirmeleri
//yapmak kodun okunabilirliğini ve sürdürülebilirliğini artıracaktır
const routers = require("./routers/index");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const path = require("path");
dotenv.config({
  path: "./config/env/config.env",
});
const app = express();
//express - body middleware
app.use(express.json()); //gönderilen json verileri request.body içerisinde yer alacak
const PORT = process.env.PORT; //config içerisindeki bilgileri

connectDatabase();

//localhost:5000/api/questions   // sorularla ilgili işlemler için buraya istek gelmeli
//localhost:5000/api/auth   // authenticationlar için buraya istek gelmeli ve burdan almalıyız
//aşağıdaki bütün istekler farklı konularla ilgili olabileceği için hepsiniilgili alanın bulundğu dosyaya göndererek kodun yazılmasını vee
//okunmasını kolaylaşturabiliriz. routers klasörü oluşturup auth işlemi için başka bir yere questions işlemleri için başka bir yere
//yönlendirme yapacağız

//ROUTES MIDDLEWARE---------------------
//use fonku ara yazılımları kullanmak için oluşturulmuştur
// app.use("/api/questions", question); //bu routere istek geldiğinde question çalışsın demiş olduk
// app.use("/api/auth", auth);

// app.get("/", (req, res, next) => {
//   res
//     .status(200) //http kodunu istediğimiz şekilde döndürebiliyoruz
//     .json({
//       success: true,
//     });
// });

//static dosyalara doğrudan erişim için onları nerede bulabileceğimizi expressin kendi middlewaresiyle belirtmemiz gerek
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", routers);
//error handling

app.use(customErrorHandler);
app.listen(PORT, () => {
  console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
});
