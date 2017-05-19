$(function () {

    $('.tck-box >a').click(function () {
        console.log(1);
        $(this).css({
            display:'none',
            zIndex:'999'
        });
        $('.tck-box1').slideDown(500);
        $('.tck-box1').css('zIndex','999');
    });
    $('.input1').focus(function () {
        $(this).val("");
    }).blur(function () {
        $(this).val('请输入号码')
    })
    $('.input2').focus(function () {
        $(this).val("");
    }).blur(function () {
        $(this).val('请输入留言内容')
    })
    $('.input3').click(function () {
        $('.tck-box1').slideUp(10, function () {
            $('.tck-box >a').css('display', 'block');
        });
    });
    $('.cursor--').click(function () {
        $('.tck-box1').slideUp(10, function () {
            $('.tck-box >a').css('display', 'block');
        });
    })
});