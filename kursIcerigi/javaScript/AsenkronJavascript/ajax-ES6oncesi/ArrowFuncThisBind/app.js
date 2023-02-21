const person = {
  age: 25,
  //   tellAge: function () {
  //     console.log(this);
  //   }.bind(this), //bind this yapıldıgında this deyimi kullanılınca blogun dısındaki this deyimi nereyi gösteriyorsa blogun içinde de onu gösterecek şekle gelir

  tellAge: () => {
    console.log(this);
    console.log(this.age);
  }, //burada binf this yapmadıgımız halde direk olarak this ifadesi window objesini gösterdi yani sanki normal fonku bind ile baglamısız gibi
  //davrandı bu da bu şekilde tanımlanan arrow funcların özelligidir
};

person.tellAge();
