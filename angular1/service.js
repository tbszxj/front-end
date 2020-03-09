/**
 * 一般情况下我们将一些服务抽取出来
 * 在其他模块中引用这些服务
 * @type {angular.Module}
 */


var module = angular.module('module',[]);
//生成随机数的服务
module.factory('myRandomNum',['$log',function () {
    return function (num1,num2) {
        return Math.random()*(num2-num1)+num1;
    }
}])