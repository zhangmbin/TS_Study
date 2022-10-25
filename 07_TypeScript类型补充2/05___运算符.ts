let message: string|null = "Hello World"
let message2: string|number = 2

const content = message ?? "你好啊, 李银河"
const content2 = message2 ?? "你好啊, 李狗屎"
console.log(content)
console.log(content2)

export{}