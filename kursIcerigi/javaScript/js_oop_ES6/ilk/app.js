/*es6 sayesinde önceki surumleerde yazılan javscript kodları kısaltılmış ve güzelleştirilmiştir */

////////önceki____________________________

// function employee(name, age, salary) {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
// }
// employee.prototype.showInfos = function () {
//   console.log(this.name, this.age, this.salary);
// };

// const emp = new employee("ramazan", 19, 10000);

// emp.showInfos();

///////////ES6 sonrası_______________
class employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  showInfos() {
    console.log(
      "isim : " +
        this.name +
        " // yas : " +
        this.age +
        " // maas : " +
        this.salary
    );
  }
}

const emp = new employee("ramazan", 19, 10000);
emp.showInfos();
