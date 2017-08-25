// 面向对象渲染页面
function select(parent, selectName) {
    var $parent = $(parent);
    this.$parent = $parent;
    this.selectName = selectName;
    this.init();
}

select.prototype = {
    constructor: select,
    init: function () {
        //渲染DOM
        this.renderDom();
        //绑定事件
        this.bindEvents();
    },
    renderDom: function () {
        var str='<div class="select-info-header"></div>' +
            '<div class="select-items"></div>';
        var $str=$(str);
        this.$parent.append($str)
        for (var i = 0; i < this.selectName.length; i++) {
            var data = this.selectName[i];
            this.renderingDom(data.title,data.selectName);
        }
    },
    renderingDom: function (title,selectName) {
        if(title==undefined){
            title='内容选择'
        }
        var $parent = this.$parent;
        var header= '<span>'+title+'</span>' +
            '<span class="cancel">取消</span>'
        var $header=$(header)
        $.each(selectName, function (i, v) {
            html = '<div class="select-item">' +
                '<span class="content">' + v + '</span>' +
                '<i class="icon fa fa-check 1x"></i>' +
                '</div>';
            var $content = $(html);
            $parent.find('.select-items').append($content);
        })
        $parent.find('.select-info-header').append($header);
    },
    bindEvents:function () {
        // 点击显示选择内容
        var seclctVal = $('.seclct-val');
        $.each(seclctVal, function () {
            $(this).on('click', function () {
                // 遮罩/内容框显示
                var _this = $(this);
                open(_this)

                // 内容选择
                $('.select-item').each(function () {
                    $(this).on('click', function () {
                        $(this).css('color', '#37a4f5');
                        $(this).siblings().css('color', '#3d3d3e');
                        $(this).find($('.icon')).css('display', 'block');
                        $(this).siblings().find($('.icon')).css('display', 'none');
                        // 关闭遮罩/内容框
                        close()
                        var __this = $(this);
                        // 替换显示值
                        var val = $(this).text();
                        setTimeout(function () {
                            __this.parent().parent().siblings().find('.vals').text(val);
                            __this.parent().parent().siblings().find('.vals').css('color', '#3d3d3e');
                        }, 700);
                    })
                })

                // 点击遮罩关闭内容显示框
                $('.mask').on('click', function () {
                    // 关闭遮罩/内容框
                    close()
                })

                // 点击取消关闭遮罩/内容显示框
                $('.cancel').on('click', function () {
                    // 关闭遮罩/内容框
                    close()
                })

                // 遮罩/内容选择关闭
                function close(_this) {
                    // 关闭遮罩
                    setTimeout(function () {
                        $('.mask').css('display', 'none');
                    }, 600);
                    // 关闭内容框
                    $('.select-info').css({
                        'transform': 'translateY(100%)',
                    })
                }

                // 遮罩/内容选择显示
                function open(find) {
                    // 显示遮罩
                    $('.mask').css('display', 'block');
                    // 内容框显示
                    find.parent().find($('.select-info')).css({
                        'transform': 'translateY(0)',
                    })
                }
            })
        })
    }
}