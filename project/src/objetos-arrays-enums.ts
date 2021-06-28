interface personTypes {
    name: string
    age: number
    hobbies: string[]
    role: number
}

//              1          2        3
enum Role { ADMIN = 1, READ_ONLY, AUTHOR }

const person: personTypes = {
    name: 'Allan',
    age: 19,
    hobbies: ['Cooking', 'Skate'],
    role: Role.ADMIN
}

console.log(person)

/*
TUPLE: array de tamanho e tipo fixo, constante 
*/