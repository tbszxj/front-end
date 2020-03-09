//0.获取需要操作的元素
var box = document.getElementById('box');
//小盒子
var smallBox = box.children[0];
//大盒子
var bigBox = box.children[1];
//小图片
var smallImg = smallBox.children[0];
//遮盖层
var mask = smallBox.children[1];
//大图片
var bigImg = bigBox.children[0];

//1.鼠标移动到小盒子上（onmouseenter跟onmouseover一样只是不会产生时间冒泡）
smallBox.onmouseover = function() {
    mask.style.display = 'block';
    bigBox.style.display = 'block';
}
smallBox.onmouseout = function () {
    mask.style.display = 'none';
    bigBox.style.display = 'none';
}
//2.鼠标在小盒子中移动的时候
smallBox.onmousemove = function (e) {
    e = e || event;
    var x = e.pageX - box.offsetLeft;
    var y = e.pageY - box.offsetTop;

    //让鼠标到mask的中间
    x -= mask.offsetWidth / 2;
    y -= mask.offsetHeight / 2;

    var maxX = smallBox.offsetWidth - mask.offsetWidth;
    var maxY = smallBox.offsetHeight - mask.offsetHeight;
    x = x > maxX ? maxX : x;
    y = y > maxY ? maxY : y;

    //控制x和y的范围
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;
    //设置遮盖层的坐标
    mask.style.left = x + 'px';
    mask.style.top = y + 'px';
    //3 显示对应的大图部分
    //计算大图的偏移
    //mask移动的距离/大图的移动距离 = mask最大能移动的距离/大图片最大能移动的距离
    //大图的移动距离 = mask移动的距离 * 大图片最大能移动的距离/mask最大能移动的距离
    var bigMaxX = bigImg.offsetWidth - bigBox.offsetWidth;
    var bigMaxY = bigImg.offsetHeight - bigBox.offsetHeight;

    var bigImgX = x * bigMaxX / maxX;
    var bigImgY = y * bigMaxY / maxY;

    bigImg.style.left = -bigImgX + 'px';
    bigImg.style.top = -bigImgY + 'px';

}
