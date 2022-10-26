// class Person {
//   name: string = ""
//   age: number = 12
// }

// const p = new Person()
// p.name = "123"

class Student {
  static time: string = "20:00"

  static attendClass() {
    console.log("去学习~")
  }
}

console.log(Student.time)//可直接被访问
Student.attendClass()

export{}
