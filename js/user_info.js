/**
 * Created by liningwei on 2017/7/17.
 */

$(function () {

    // 单选框

    var check=$('label');

    console.log(check);

    check.on('click',function () {
            $(this).children(0).addClass('icon-danxuankuangyixuanzhong').removeClass('icon-Check');
            $(this).parent().parent().siblings().find('label').children(0).addClass('icon-Check').removeClass('icon-danxuankuangyixuanzhong');
        })

    var xiugai=$('.user-right');

    $.each(xiugai,function () {
        $(this).on('click',function () {
            window.location.href="apply_form.html";
        })
    })

})