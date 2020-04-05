var name = '小明';
var age = 18;
var flag = true;

function summary(num1,num2){
  return num1 + num2;
}

if(flag){
  console.log(summary(10, 20));
}

//ES6导出(方式一)
export {
  flag,summary
}
//方式2,定义变量时直接导出
export var num1 = 1000;

//3.导出函数/类
export function mul(num1,num2){
  return num1 * num2;
}

export class Person{
  run(){
    console.log('小兔子快跑');
  }
}

//export default(默认的只能有一个)
const address = '北京';
export default address;
