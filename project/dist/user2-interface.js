"use strict";
var Person = (function () {
    function Person(n) {
        this.age = 19;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user2;
user2 = new Person("Allan");
user2.greet("Olá, eu me chamo");
console.log(user2);
//# sourceMappingURL=user2-interface.js.map