/**
 * Created by liningwei on 2017/7/19.
 */


$(function () {


    // 点击录音弹出录音框

    $('.voice-start').on('click',function () {
        event.preventDefault();
        $('.recording').addClass('active');
        $('.shade').css('display','block');
    })
    
    // 开始录音

    var times=0;

    var timer=null;

    $('.start').on('touchstart mousedown',function () {
        event.preventDefault();
        if($(this).text()=='按住录音'){
            $(this).text('按住录音');
            timer=setInterval(function () {
                times++;

                times=times<10?'0'+times:times;

                $('.recording-times').text(times);
            },1000);
        }

        $('.recording-animation').addClass('before');


        //停止录音

        $('.start').on('touchend mouseup',function (){
            event.preventDefault();
            $(this).text('录音停止');
            clearInterval(timer);
            $('.recording-animation').removeClass('before');
            setTimeout(function () {
                $('.shade').css('display','none');

                $('.recording').removeClass('active');

                $('.recording-times').text('00');

                $('.start').text('按住录音');

                //语音条显示
                $('.yuyin1').css('display','block')
            },1000)

        })

    })
    
    
    //语音条播放

    $('.yuyin1').on('click',function () {
        event.preventDefault();
        if($('.yuyin1 img').attr('src')=='images/audio2.png'){
            $('.yuyin1 img').attr('src','images/audio2.gif')
        }else {
            $('.yuyin1 img').attr('src','images/audio2.png')
        }
    })



    //点击遮挡关闭

    $('.shade').on('click',function () {
        $(this).css('display','none');
        $('.recording').removeClass('active');
    })


    //语音播放

    $('.yuyin1').on('click',function () {

    })


    // 小纸条列表语音播放

    var yuyin=$('.yuyin');

    $.each(yuyin,function () {
        $(this).on('click', function () {
            $(this).find('.yuyin-bf').toggleClass('actives');
            $(this).parent().parent().siblings().find('.yuyin-bf').removeClass('actives');
        })
    })


    // 上传图片

    $(function () {
        // 初始化插件
        $("#zyupload").zyUpload({
            width: "100%",                 // 宽度
            itemWidth: "80px",                 // 文件项的宽度
            itemHeight: "80px",                 // 文件项的高度
            url: "/upload/UploadAction",  // 上传文件的路径
            fileType: ["jpg", "png"],// 上传文件的类型
            fileSize: 51200000,                // 上传文件的大小
            multiple: true,                    // 是否可以多个文件上传
            dragDrop: false,                   // 是否可以拖动上传文件
            tailor: false,                   // 是否可以裁剪图片
            del: true,                    // 是否可以删除文件
            finishDel: false,  				  // 是否在上传文件完成后删除预览
            /* 外部获得的回调接口 */
            onSelect: function (selectFiles, allFiles) {    // 选择文件的回调方法  selectFile:当前选中的文件  allFiles:还没上传的全部文件
                console.info("当前选择了以下文件：");
                console.info(selectFiles);
            },
            onDelete: function (file, files) {              // 删除一个文件的回调方法 file:当前删除的文件  files:删除之后的文件
                console.info("当前删除了此文件：");
                console.info(file.name);
            },
            onSuccess: function (file, response) {          // 文件上传成功的回调方法
                console.info("此文件上传成功：");
                console.info(file.name);
                console.info("此文件上传到服务器地址：");
                console.info(response);
            },
            onFailure: function (file, response) {          // 文件上传失败的回调方法
                console.info("此文件上传失败：");
                console.info(file.name);
            },
            onComplete: function (response) {           	  // 上传完成的回调方法
                console.info("文件上传完成");
                console.info(response);
            }
        });

    });
})


