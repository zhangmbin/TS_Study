
// const info = {
//   name: "why",
//   age: 18
// }

// info.name = "kobe"

// 

type Method = 'GET' | 'POST'
function request(url: string, method: Method) {}

type Request = {
  url: string,
  method: Method
}

const options = {
  url: "https://www.coderwhy.org/abc",
  method: "POST"
} as const 
/* 这被称为const断言。
const断言告诉编译器为表达式推断出它能推断出的最窄或最特定的类型。
如果不使用它，编译器将使用其默认类型推断行为，这可能会导致更广泛或更一般的类型。 */

request(options.url, options.method)

export {}
