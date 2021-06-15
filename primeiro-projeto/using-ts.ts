const button = document.querySelector("button")
/*
  ! declara que nao eh nulo, ou seja, o valor sera encontrado
  HTMLInputElement eh um tipo que declara um input HTML, que eh uma string
*/
const input1 = document.getElementById("num1")! as HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement

function add(num1: number, num2: number) {
  return num1 + num2
}

button.addEventListener("click", () => {
  // o simbolo de + garante que os valores sejam do tipó number
  console.log(add(+input1.value, +input2.value))
})
