"use strict";
var Person2 = (function () {
    function Person2(n) {
        this.age = 35;
        this.name = n;
    }
    Person2.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person2;
}());
var user3;
user3 = new Person2("Ana");
user3.greet("Olá, eu me chamo");
console.log(user3);
//# sourceMappingURL=readonly-and-interface-inheritance.js.map