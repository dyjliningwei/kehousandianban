/**
 * Created by liningwei on 2017/7/18.
 */

$(function () {

    // 设置默认

    var danxuan=$('.management ul li p label');

    $.each(danxuan,function () {
        $(this).on('click',function () {
            $(this).find('i').addClass('icon-danxuankuangyixuanzhong').removeClass('icon-Check');
            $(this).parent().parent().siblings().find('p label i').removeClass('icon-danxuankuangyixuanzhong').addClass('icon-Check');
        })
    })


    // 编辑

    var compile=$('.compile');

    $.each(compile,function () {
        $(this).on('click',function () {
            window.location.href="apply_form.html";
        })
    })

    
    // 删除

    var del=$('.delete');

    $.each(del,function () {
        $(this).on('click',function () {
            layer.open({
                content: '是否删除？',
                btn: ['删除', '取消']
            });
        })
    })
})
