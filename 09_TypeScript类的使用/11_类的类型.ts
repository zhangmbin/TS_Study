class Person {
  name: string = "123"
  eating() {

  }
}

const p = new Person()

const p1: Person = {//类的类型约束
  name: "why",
  eating() {

  }
}

function printPerson(p: Person) {
  console.log(p.name)
}

printPerson(new Person())
printPerson({name: "kobe", eating: function() {}})

export {}

