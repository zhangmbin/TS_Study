// 在联合类型简单的情况下，尽量使用联合类型


/*
type Arg = string | any[]
 function getLength(args: Arg) {
    return args.length
} */

function getLength(args: string): number
function getLength(args: any[]): number

function getLength(args: any):number {
    return args.length
}
