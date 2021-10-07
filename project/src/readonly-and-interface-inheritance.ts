interface Named {
  readonly name: string
}
interface Greetable extends Named {
  greet(phrase: string): void
}

class Person2 implements Greetable {
  name: string
  age = 35

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`)
  }
}

let user3: Greetable

user3 = new Person2("Ana")

user3.greet("Olá, eu me chamo")
console.log(user3)
