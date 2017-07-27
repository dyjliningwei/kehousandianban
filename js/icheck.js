/**
 * Created by liningwei on 2017/7/25.
 */

$(function () {

     // 单选框

    var label=$('label');

    $.each(label,function () {
        $(this).on('click',function () {
            $(this).children(0).addClass('icon-danxuankuang').removeClass('icon-Check');
            $(this).siblings().children(0).removeClass('icon-danxuankuang').addClass('icon-Check')
        })
    })
})