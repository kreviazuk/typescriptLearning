// interface Person  {
//     name:string,
//     age:number
// }
// // 定义的变量比接口少了一些属性是不允许的：
// let a:Person = {
//     name:'zhou',
// }
// 赋值的时候，变量的形状必须和接口的形状保持一致。

// 有时我们希望不要完全匹配一个形状，那么可以用可选属性：
// interface newPerson {
//     name:string,
//     age?:number,
// }
// let b:newPerson = {
//     name:'zhou',
// }

// 只读属性
// interface newPerson {
//     name:string,
//     readonly age:number,
// }
// let b:newPerson = {
//     name:'zhou',
//     age:12
// }
// b.age = 12
// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
interface newPerson {
    name:string,
    readonly age:number,
}
let b:newPerson = {
    name:'zhou',
    [propName: string]: any;
}
b.age = 12