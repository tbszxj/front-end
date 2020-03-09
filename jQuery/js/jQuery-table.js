(function ($) {
    /**
     * 给$原型添加table方法
     * @param arrThead 生成表头的数组
     * @param arrTbody 生成表格主题部分的数组
     */
    $.fn.table = function (arrThead,arrTbody) {
        var list = [];
        list.push('<table>');
        list.push('<tr>');//生成表头
        for(var i=0;i<arrThead.length;i++){
            list.push('<th>');
            list.push(arrThead[i]);
            list.push('</th>');
        }
        list.push('</tr>');
        //生成表格主题
        for(var i=0;i<arrTbody.length;i++){
            list.push('<tr>');
            //生成一个序号td
            list.push('<td>');
            list.push(i);
            list.push('</td>');
            //遍历数组中的对象中的元素
            for(var key in arrTbody[i]){
                list.push('<td>');
                list.push(arrTbody[i][key]);
                list.push('</td>');
            }
            list.push('</tr>');
        }
        list.push('</table>')

        this.html(list.join(''));
    }
}(jQuery))