var isDone = false;
// 使用构造函数Boolean创造的对象不是布尔值
//布尔值
// 使用构造函数Boolean创造的对象不是布尔值
// let createdByNewBoolean:boolean = new Boolean(1)
//数值
// let a:number = 0
// let b:number = 0xf00d
//字符串
// let myname:string = 'zhou'
// let sentence:string = `my name is ${myname}`
//空值
// 在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
// function alertName():void {
//     console.log(123);
// }
// null undefined
// let n:null = null
// let u:undefined = undefined
// undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
// let num:number = undefined
// 而 void 类型的变量不能赋值给 number 类型的变量：
var n;
var u = n;
