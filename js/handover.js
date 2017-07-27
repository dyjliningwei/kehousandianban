/**
 * Created by liningwei on 2017/7/8.
 */

$(function () {

    // 单选框

    var a = $('.handover-address .weui-panel__bd a');

    a.on('click',function () {
        $(this).find('i').addClass('icon-danxuankuang').removeClass('icon-Check');
        $(this).siblings().find('i').removeClass('icon-danxuankuang').addClass('icon-Check');
    })
})