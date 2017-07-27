/**
 * Created by liningwei on 2017/7/20.
 */

$(function () {

    // 点击拨打电话

    $('.phone').on('click',function () {

        layer.open({
            content: '联系电话:<a href="tel:400-696-1225" style="font-size: 15px;color: #000">400-696-1225</a>',
            btn: ['拨打','取消'],
            yes:function () {
                window.location.href="tel:400-696-1225";
            }
        });
    })
})