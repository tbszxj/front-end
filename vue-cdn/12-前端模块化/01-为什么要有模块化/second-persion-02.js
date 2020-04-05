//复用second-person文件中定义的对象
;(function () {
  // 1. 复用moduleA中的flag
  if(moduleA.flag){
    console.log('复用成功');
  }
  //2. 复用sum
  console.log(moduleA.sum(40, 50));
})();