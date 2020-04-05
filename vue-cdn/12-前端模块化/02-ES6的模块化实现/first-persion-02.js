//ES6导入,对象中定义的对象
import {flag,summary,num1} from "./first-person.js";

if(flag){
  console.log('第一个人试图复用自己写的flag');
}
//导入export定义时直接导出的变量
console.log(summary(num1, 20));

//导入函数/类
import {mul,Person} from "./first-person.js";

console.log(mul(10, 50));

const p = new Person();
p.run();

//导入默认
import addr from './first-person.js'
console.log(addr);

//统一全部导入
import * as aaa from './first-person.js'
console.log(aaa.flag);