// 一种组合类型的方式: 联合类型
type WhyType = number | string
type Direction = "left" | "right" | "center"


// 另一种组件类型的方式: 交叉类型---------多类型结合在一起同时使用

type WType = number & string

interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly //----满足其一即可
type MyType2 = ISwim & IFly //====二者需要同时满足

const obj1: MyType1 = {
  flying() {

  }
}

const obj2: MyType2 = {
  swimming() {

  },
  flying() {
    
  }
}

export {}

