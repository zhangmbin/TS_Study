/* 
n 什么是类型缩小呢？
p类型缩小的英文是 Type Narrowing；
p我们可以通过类似于 typeof padding === "number" 的判断语句，来改变TypeScript的执行路径；
p在给定的执行路径中，我们可以缩小比声明时更小的类型，这个过程称之为 缩小;
p而我们编写的 typeof padding === "number 可以称之为 类型保护（type guards）；
*/





// 1.typeof的类型缩小
type IDType = number | string
function printID(id: IDType) {
  if (typeof id === 'string') {//------原本是 number | string 类型，将其缩小为 string 类型
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

// 2.平等的类型缩小(=== == !== !=/switch)------用if或者switch判断
type Direction = "left" | "right" | "top" | "bottom"
function printDirection(direction: Direction) {
  // 1.if判断
  // if (direction === 'left') {
  //   console.log(direction)
  // } else if ()

  // 2.switch判断
  // switch (direction) {
  //   case 'left':
  //     console.log(direction)
  //     break;
  //   case ...
  // }
}

// 3.instanceof
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString())
  } else {
    console.log(time)
  }
}

class Student {
  studying() {}
}

class Teacher {
  teaching() {}
}

function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying()
  } else {
    p.teaching()
  }
}

const stu = new Student()
work(stu)


// 4. in --------用于确定对象是否具有带名称的属性，如果指定的属性在指定的对象或其原型链中，则in 运算符返回true
type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming()
  } else {
    animal.running()
  }
}

const fish: Fish = {
  swimming() {
    console.log("swimming")
  }
}

walk(fish)

