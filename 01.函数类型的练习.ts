// 写法1
/* function calc(n1: number, n2: number, fn: (n1: number, n2: number) => number) {
    return fn(n1, n2)
} */

// 写法2    num3为可选参数，表示为 number | undefine
type Calc = (num1: number, num2: number, num3?: number) => void//代表一个函数类型

function calc(n1: number, n2: number, fn: Calc) {
    return fn(n1, n2)
}

const res1 = calc(30, 50, function (a1, a2, a3:number = 10) {
    console.log(a3);

    return a1 + a2

})
console.log(res1);

const res2 = calc(30, 50, function (a1, a2) {
    return a1 * a2
})
console.log(res2);
