
$(function () {

    // 点击显示隐藏班级

    var lis=$('.select_information ul li');

    $.each(lis,function () {
        var _this=$(this);
        _this.find('.show').on('click',function () {
            _this.find('.show-content').slideToggle();
            _this.find('.icon-youbian').toggleClass('active');
        })
    })
})