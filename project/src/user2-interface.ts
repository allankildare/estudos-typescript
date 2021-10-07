interface Greetable {
  name: string

  greet(phrase: string): void
}

class Person implements Greetable {
  name: string
  age = 19

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`)
  }
}

let user2: Greetable

user2 = new Person("Allan")

user2.greet("Olá, eu me chamo")
console.log(user2)
