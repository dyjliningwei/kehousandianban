/**
 * Created by liningwei on 2017/7/21.
 */

$(function () {


    // tab切换

    var lis=$('.tabs ul li');

    $.each(lis,function () {
        $(this).on('click',function () {

            $(this).children(0).addClass('active');
            $(this).siblings().children(0).removeClass('active');

            var index=$(this).index();

            $('.tab-info .details-list').eq(index).addClass('list-active').siblings().removeClass('list-active');
        })

    })


})