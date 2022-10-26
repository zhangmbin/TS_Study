//继承是多态使用的前提
//抽象方法只能放在抽象类里（使用abstract声明）
//抽象类不能被实例化(不能new创建)
//抽象类中的抽象方法必须被子类实现，否则该类必须是个抽象类
//严谨、安全

function makeArea(shape: Shape) {
  return shape.getArea()
}


abstract class Shape {
  abstract getArea(): number
}


class Rectangle extends Shape {//继承
  private width: number
  private height: number

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  private r: number

  constructor(r: number) {
    super()
    this.r = r
  }

  getArea() {
    return this.r * this.r * 3.14
  }
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)

console.log(makeArea(rectangle))
console.log(makeArea(circle))
// makeArea(new Shape())

// makeArea(123)
// makeArea("123")

