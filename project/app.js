"use strict";
var userInput; // tipo desconhecido
var userName;
userInput = 5;
userInput = 'Allan';
// userName = userInput -> nao pode ser atribuido
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Um erro sinistro aconteceu', 500);
