let userInput: unknown // tipo desconhecido
let userName: string

userInput = 5
userInput = 'Allan'
// userName = userInput -> nao pode ser atribuido

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}

generateError('Um erro sinistro aconteceu', 500)