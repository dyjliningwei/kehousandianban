/**
 * Created by liningwei on 2017/7/13.
 */


$(function () {

    // 风采展示

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