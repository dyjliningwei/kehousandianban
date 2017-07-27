/**
 * Created by liningwei on 2017/7/18.
 */


$(function () {

    // 获得荣誉

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationType : 'fraction',
        paginationClickable: true,
        initialSlide :0,
        autoplay : 3000,
        spaceBetween: 30,
        paginationType : 'progress',
        hashnav: true,
        hashnavWatchState: true,
        loop:true,
        autoplayDisableOnInteraction : false
    })
})