/* 
p如果是定义   非对象类型   ，通常推荐使用type，比如Direction、Alignment、一些Function；
n 如果是定义  对象类型  ，那么他们是有区别的：
pinterface 可以重复的对某个接口来定义属性和方法；
p而type定义的是别名，别名是不能重复的；
 */


// interface IFoo {
//   name: string
// }

// interface IFoo {
//   age: number
// }

// const foo: IFoo = {------------可以重复的对某个接口来定义属性和方法
//   name: "why",
//   age: 18
// }

// document.getElementById("app") as HTMLDivElement
// window.addEventListener

// interface Window {
//   age: number
// }
// window.age = 19
// console.log(window.age)


// type IBar = {
//   name: string
//   age: number
// }

// type IBar = {
// }

interface IPerson {
  
}
