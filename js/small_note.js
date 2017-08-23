/**
 * Created by liningwei on 2017/7/19.
 */


$(function () {


    // 语音动画

    var waves = new SineWaves({
        el: document.getElementById('waves'),

        speed: 10,

        width: function() {
            return $('.voice').width();
        },

        height: function() {
            return $('.voice').height();
        },

        ease: 'SineInOut',

        wavesWidth: '100%',

        waves: [
            {
                timeModifier: 3,
                lineWidth: 1,
                amplitude: -10,
                wavelength: 48
            },
            {
                timeModifier: 3,
                lineWidth: 1,
                amplitude: -40,
                wavelength: 50
            },
            {
                timeModifier: 3,
                lineWidth: 1,
                amplitude: -20,
                wavelength: 30
            },

        ],

        // Resize
        resizeEvent: function() {
            var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop(0,"#FE5400");

            var index = -1;
            var length = this.waves.length;
            while(++index < length){
                this.waves[index].strokeStyle = gradient;
            }

            // Clean Up
            index = void 0;
            length = void 0;
            gradient = void 0;
        }
    });

    // 点击录音

    $('.voice-start').on('click',function () {
        $('.recording').addClass('active');
        $('.shade').css('display','block');
    })

    // 点击遮罩关闭

    $('.shade').on('click',function () {
        $(this).css('display','none');
        $('.recording').removeClass('active');
    })

    // 小纸条列表语音播放

    $('.yuyin').on('click', function () {
        $('.yuyin-bf').toggleClass('actives');
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


