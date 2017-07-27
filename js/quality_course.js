/**
 * Created by liningwei on 2017/7/20.
 */

$(function () {

    // banner

    var swiper = new Swiper('.banner .swiper-container', {
        pagination: '.banner .swiper-pagination',
        paginationType : 'fraction',
        paginationClickable: true,
        initialSlide :0,
        autoplay : 5000,
        spaceBetween: 30,
        paginationType : 'bullets',
        hashnav: true,
        hashnavWatchState: true,
        loop:true,
        autoplayDisableOnInteraction : false
    })

    // 点击报名

    var apply=$('.apply');

    $.each(apply,function () {
        $(this).on('click',function () {
            window.location.href="course.html";
        })
    })


    // 活动报名

    var activity=$('.activity');

    $.each(activity,function () {
        $(this).on('click',function () {
            window.location.href="activity.html";
        })
    })

})