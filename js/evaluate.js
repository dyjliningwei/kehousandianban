$(function () {

    // 星级评价

    var li = $('.stars ul li');

    $.each(li, function () {
        var index = $(this).index();
        $(this).on('click', function () {
            $('.pj').css('display','block');
            $(this).children(0).addClass('stars-active');
            $(this).prevAll().children(0).addClass('stars-active');
            $(this).nextAll().children(0).removeClass('stars-active');
            
            switch (index) {
                case 0:
                    index == 0;
                    $('.star-text').text('非常差');

                    break;
                case 1:
                    index == 1;
                    $('.star-text').text('较差');

                    break;
                case 2:
                    index == 2
                    $('.star-text').text('一般');

                    break;
                case 3:
                    index == 3
                    $('.star-text').text('较好');

                    break;
                case 4:
                    index == 4
                    $('.star-text').text('非常好');

                    break;
                default:
                    $('.star-text').text('');
            }
        });
    })

    // 评价按钮

    var buttons = $('.pj button');

    $.each(buttons, function () {
        $(this).on('click', function () {
            $(this).toggleClass('pj-button-active');
        })
    })

})