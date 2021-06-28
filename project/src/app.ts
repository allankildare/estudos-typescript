const button = document.querySelector('button')! // ! explicita que o botao realmente existe (if (botao))

button.addEventListener('click', () => {
    console.log('Fui clicado :)')
})