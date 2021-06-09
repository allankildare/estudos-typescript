var button = document.querySelector("button");
/*
  ! declara que nao eh nulo, ou seja, o valor sera encontrado
  HTMLInputElement eh um tipo que declara um input HTML, que eh uma string
*/
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    // o simbolo de + garante que os valores sejam do tipó number
    console.log(add(+input1.value, +input2.value));
});
