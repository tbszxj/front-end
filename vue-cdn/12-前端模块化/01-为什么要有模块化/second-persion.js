//定义一个闭包函数以保证作用域不冲突
var moduleA = (function () {
  //为提高复用性，导出的对象
  var obj = {};

  function sum(num1,num2) {
    return num1 + num2;
  }

  var flag = true;

  if(flag){
    console.log(sum(10,20));
  }

  obj.flag = flag;
  obj.sum = sum;
  return obj
})();

