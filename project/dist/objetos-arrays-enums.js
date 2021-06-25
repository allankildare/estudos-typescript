"use strict";
//              1          2        3
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Allan',
    age: 19,
    hobbies: ['Cooking', 'Skate'],
    role: Role.ADMIN
};
console.log(person);
/*
TUPLE: array de tamanho e tipo fixo, constante
*/ 
