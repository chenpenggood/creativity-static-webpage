$(function () {

    window.addEventListener("scroll", function(){
        phoneScroll();
        liArrScroll();
        liArr2Scroll();
        liArr3Scroll();
        liArr4Scroll();
    });
    var contentFlag = true;
    var liFlag = true;
    var liFlag2 = true;
    var liFlag3 = true;
    var liFlag4 = true;



    function liArrScroll() {
        if($(document).scrollTop() < 700){
            if(liFlag){
                liFlag = false;
                $('.liArr1').stop(true).animate({
                    marginTop: '450px'
                },500)
            }

        } else {
            liFlag = true;
            $('.liArr1').stop(true).animate({
                marginTop: '20px'
            },500)
        }
    }

    function liArr2Scroll() {
        if($(document).scrollTop() < 720){
            if(liFlag2){
                liFlag2 = false;
                $('.liArr2').stop(true).animate({
                    marginTop: '450px'
                },500)
            }

        } else {
            liFlag2 = true;
            $('.liArr2').stop(true).animate({
                marginTop: '20px'
            },500)
        }
    }


    function liArr3Scroll() {
        if($(document).scrollTop() < 740){
            if(liFlag3){
                liFlag3 = false;
                $('.liArr3').stop(true).animate({
                    marginTop: '450px'
                },500)
            }

        }else {
            liFlag3 = true;
            $('.liArr3').stop(true).animate({
                marginTop: '20px'
            },500)
        }
    }

    function liArr4Scroll() {
        if($(document).scrollTop() < 760){
            if(liFlag4){
                liFlag4 = false;
                $('.liArr4').stop(true).animate({
                    marginTop: '450px'
                },500)
            }

        } else {
            liFlag4 = true;
            $('.liArr4').stop(true).animate({
                marginTop: '2' +
                '0px'
            }, 500)
        }
    }


    //离开  4321
    //进入  1234



    //function liArrScroll() {
    //    if($(document).scrollTop() < 700){
    //        if(liFlag){
    //            liFlag = false;
    //            $('.liArr1').stop(true).animate({
    //                top: '450px'
    //            },500)
    //        }
    //        else {
    //                liFlag = true;
    //                $('.liArr1').stop(true).animate({
    //                    top: '20px'
    //                },500)
    //            }
    //    }
    //}
    //
    //function liArr2Scroll() {
    //    if($(document).scrollTop() < 720){
    //        if(liFlag2){
    //            liFlag2 = false;
    //            $('.liArr2').stop(true).animate({
    //                top: '450px'
    //            },500)
    //        }
    //        else {
    //                liFlag2 = true;
    //                $('.liArr2').stop(true).animate({
    //                    top: '90px'
    //                },500)
    //            }
    //    }
    //}
    //
    //
    //function liArr3Scroll() {
    //    if($(document).scrollTop() < 740){
    //        if(liFlag3){
    //            liFlag3 = false;
    //            $('.liArr3').stop(true).animate({
    //                top: '450px'
    //            },500)
    //        }
    //        else {
    //                liFlag3 = true;
    //                $('.liArr3').stop(true).animate({
    //                    top: '160px'
    //                },500)
    //            }
    //    }
    //}
    //
    //function liArr4Scroll() {
    //    if($(document).scrollTop() < 760){
    //        if(liFlag4){
    //            liFlag4 = false;
    //            $('.liArr4').stop(true).animate({
    //                top: '450px'
    //            },500)
    //        }
    //        else {
    //            liFlag4 = true;
    //            $('.liArr4').stop(true).animate({
    //                top: '230px'
    //            }, 500)
    //        }
    //    }
    //}


    //回调
    //function liArrScroll() {
    //    if ($(document).scrollTop() < 700) {
    //        if (liFlag) {
    //            liFlag = false;
    //            $('.liArr4').stop().animate({
    //                // margin top
    //                top: '560px'
    //            }, 200,function () {
    //                $('.liArr3').stop().animate({
    //                    top: '490px'
    //                },250,function () {
    //                    $('.liArr2').stop().animate({
    //                        top: '420px'
    //                    },300,function () {
    //                        $('.liArr1').stop().animate({
    //                            top: '350px'
    //                        },350)
    //                    })
    //                })
    //            });
    //        }
    //    }
    //    else {
    //        if (!liFlag) {
    //            liFlag = true;
    //            $('.liArr1').stop().animate({
    //                //margin top
    //                top: '20px'
    //            }, 300,function () {
    //                $('.liArr2').stop().animate({
    //                    top: '90px'
    //                },250,function () {
    //                    $('.liArr3').stop().animate({
    //                        top: '160px'
    //                    },200,function () {
    //                        $('.liArr4').stop().animate({
    //                            top: '230px'
    //                        },150)
    //                    })
    //                })
    //            });
    //        }
    //    }
    //}


    //function liArr2(){
    //    $('.liArr2').animate({
    //        marginTop: '450px'
    //    },500)
    //}





    function phoneScroll() {
        if ($(document).scrollTop() < 700) {
            if (contentFlag) {
                contentFlag = false;
                $('.showPhone').stop().animate({
                    bottom: -382 + 'px'
                }, 500,liArrScroll);

            }
        }
        else {
            if (!contentFlag) {
                contentFlag = true;
                $('.showPhone').stop().animate({
                    bottom: 0
                }, 500);
            }
        }

    }
});