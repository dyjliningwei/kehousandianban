/**
 * Created by liningwei on 2017/7/20.
 */

$(function () {

    // 性别切换

    var i=$('.radio i');
    i.on('click',function () {
        $(this).addClass('icon-danxuankuang').removeClass('icon-Check').parent().siblings().children(0).removeClass('icon-danxuankuang').addClass('icon-Check');
    })

})