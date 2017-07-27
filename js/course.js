/**
 * Created by liningwei on 2017/7/24.
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

})