//动画函数，第一个参数是要移动的元素
//target为目标位置
//callback是回调函数
function animate(element,target,callback) {
    if(element.timerId){//如果该定时器已经存在，停掉该定时器
        clearInterval(element.timerId);
    }
    element.timerId = setInterval(function() {
        //当前坐标
        var current = element.offsetLeft;
        //步进
        var step = 10;

        //如果目标位置比当前位置小
        if(current > target) {//将步进设为负数
            step = -Math.abs(step);
        }

        if(Math.abs(current - target) <= Math.abs(step)) {
            element.style.left = target + 'px';
            clearInterval(element.timerId);
            if(callback) {//执行回调函数
                callback();
            }
            return;
        }
        current += step;
        element.style.left = current +'px';
    },20);
}