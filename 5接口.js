// interface Person  {
//     name:string,
//     age:number
// }
// // 定义的变量比接口少了一些属性是不允许的：
// let a:Person = {
//     name:'zhou',
// }
// 赋值的时候，变量的形状必须和接口的形状保持一致。
var _a;
var b = (_a = {
        name: 'zhou'
    },
    _a[propName] = string,
    _a.any = any,
    _a);
b.age = 12;
