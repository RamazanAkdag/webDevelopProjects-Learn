let value;

const programmer = {
  name: "Mustafa Murat Coşkun",
  age: 25,
  email: "mustafaMCoskun@gmail.com",
  langs: ["python", "java", "javascript"],

  adress: {
    city: "Ankara",
    street: "Bahçelievler",
  },

  work: function () {
    return "programcı çalışıyor...";
  },
};

value = programmer;

console.log(value);
