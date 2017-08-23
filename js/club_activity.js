$(function () {

    // 点击显示赞、评论

    var caozuobtn = $('.caozuobtn');

    var caozuobox = $('.caozuobox');

    var pinglun = $('.pinglun');

    var li = $('.contentli');

    var xin = $('.xinbox a');

    $.each(li, function () {

        var _this = $(this);

        _this.find(caozuobtn).on('click', function () {
            stopPropageation(event);
            _this.find(caozuobox).toggleClass('caozuobox-active');
            _this.siblings().find(caozuobox).removeClass('caozuobox-active');

            // 点击空白处隐藏点赞、评论框
            document.onclick = function (event) {
                var event = event || window.event;
                var target = event.target || event.srcElement;

                if (target.className !== "caozuobox-active") {
                    _this.find(caozuobox).removeClass('caozuobox-active');
                }
                if ((target.className !== "comment")&&(target.className !== "input")) {
                    $('.comment').css('display','none');
                }
            }
        })

        // 点击评论
        _this.find(pinglun).on('click', function () {
            stopPropageation(event);
            _this.find(caozuobox).toggleClass('caozuobox-active');
            $('.comment').css('display', 'block');
            $('.comment input').focus();
        })

        // 点击赞

        _this.find(xin).on('click', function () {
            stopPropageation(event);
            _this.find(caozuobox).toggleClass('caozuobox-active');
            _this.siblings().find(caozuobox).removeClass('caozuobox-active');
            $(this).toggleClass('redxin');
        })

    })

    function stopPropageation(event) {
        var event = event || window.event;
        if (event.stopPropagation()) {
            event.stopPropagation()
        } else {
            event.cancelable = true;
        }
    }


})