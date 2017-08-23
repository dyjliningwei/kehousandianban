
$(function () {

    // 导航切换

    $('.particulars ul li').on('click',function () {
        var index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.club-info').eq(index).addClass('info-active').siblings().removeClass('info-active');
    })
})