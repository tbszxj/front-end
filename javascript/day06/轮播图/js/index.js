//0.获取元素
var box = document.getElementById('box');
var screen = box.children[0];
var ul = screen.children[0];
var ol = screen.children[1];

//获取箭头容器
var arrow = document.getElementById('arrow');
var arrLeft = arrow.children[0];
var arrRight = arrow.children[1];
//获取图片宽度
var imgWigth = screen.width;

//1.动态生成序号
for(var i=0;i<ul.children.length;i++){
    var li = document.createElement('li');
    li.innerText = i+1;
    li.index = i;
    li.onclick = liClick;//注册点击事件
    ol.appendChild(li);
}
//2.鼠标经过显示箭头，离开隐藏箭头
box.onmouseover = function () {
    arrow.style.display = 'block';
}
box.onmouseout = function() {
    //arrow.style.display = 'none';
}
//3.点击序号切换图片
function liClick() {
    animate(ul,-this.index * imgWigth);
    //让当前序号高亮显示
    for(var i=0;i<ul.children.length;i++){
        li = ol.children[i];
        li.className = '';
    }
    this.className = 'current';
}
//4.点击箭头实现上下切换
//下一张
var index = 0;
arrRight.onclick = function() {
    index++;
    if(index < ul.children.length) {
        ol.children[index].click();
    }else{
        index = 0;
        ol.children[index].click();
    }
}
//上一张
arrLeft.onclick = function () {
    index--;
    if(index >= 0 ){
        ol.children[index].click();
    }else{
        index = ol.children.length-1;
        ol.children[index].click();
    }
}
//5.自动切换图片