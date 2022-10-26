interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

// 类实现接口
class Animal {
  
}

// 继承: 只能实现单继承---一个子类只有一个父类
// 实现: 实现接口, 类可以实现多个接口    
// implements是实现接口，实现一些类共有方法属性的提取。
class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log("Fish Swmming")
  }

  eating() {
    console.log("Fish Eating")
  }
}


class Person implements ISwim {
  swimming() {
    console.log("Person Swimming")
  }
}


// 编写一些公共的API: 面向接口编程
function swimAction(swimable: ISwim) {
  swimable.swimming()
}

// 1.所有实现了接口的类对应的对象, 都是可以传入
swimAction(new Fish())
swimAction(new Person())


swimAction({swimming: function() {}})

export{}

