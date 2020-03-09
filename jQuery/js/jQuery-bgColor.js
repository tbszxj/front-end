(function ($) {
    //需要给jQuery的原型添加方法
    //$.fn.method = fn 实例方法
    $.fn.bgColor = function (color) {
        console.log(this);//this是调用这个bgColor的jQuery对象
        this.css('backgroundColor',color);
        //返回调用这个方法的对象本身
        return this;
    }
}(jQuery));//自执行函数