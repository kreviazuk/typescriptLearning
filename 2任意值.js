// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
// 但如果是 any 类型，则允许被赋值为任意类型。
// let a:number = 12
// a = 'e'
var b = 12;
b = 'e';
