//    简介显示
$('.abstractDown').on('click', function () {
    $('.courseP').toggleClass('courseP-active');
    $('.abstractDown .iconfont').toggleClass('down-active');
})


new function () {
    var _self = this;
    _self.fontSize = 20; //默认字体大小
    _self.changePage = function ()   {
        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px !important");
    }
    _self.changePage();
    window.addEventListener('resize', function () {
        _self.changePage();
    }, false);
};
