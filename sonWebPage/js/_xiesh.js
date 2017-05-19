$(function(){

    $(".yb_form input").eq(0).on("click",function(){
        $(this).css({
            border: '1px solid rgb(93, 211, 249)',
            'box-shadow': 'rgb(191, 114, 224) 0px 0px 5px 0px',
            transition: 'all 1s'
        }).blur(function(){
            $(this).css({
                border: '1px solid rgb(78, 88, 93)',
                'box-shadow': 'rgb(191, 114, 224) 0px 0px 0px 0px',
                transition: 'all 0.5s'
            })
        })

    })
    $(".yb_form input").eq(1).on("click",function(){
        $(this).css({
            border: '1px solid rgb(93, 211, 249)',
            'box-shadow': 'rgb(191, 114, 224) 0px 0px 5px 0px',
            transition: 'all 1s'
        }).blur(function(){
            $(this).css({
                border: '1px solid rgb(78, 88, 93)',
                'box-shadow': 'rgb(191, 114, 224) 0px 0px 0px 0px',
                transition: 'all 0.5s'
            })
        })

    })
    $(".yb_form input").eq(2).on("click",function(){
        $(this).css({
            border: '1px solid rgb(93, 211, 249)',
            'box-shadow': 'rgb(191, 114, 224) 0px 0px 5px 0px',
            transition: 'all 1s'
        }).blur(function(){
            $(this).css({
                border: '1px solid rgb(78, 88, 93)',
                'box-shadow': 'rgb(191, 114, 224) 0px 0px 0px 0px',
                transition: 'all 0.5s'
            })
        })
    })
    $(".yb_form textarea").eq(0).on("click",function(){
        $(this).css({
            border: '1px solid rgb(93, 211, 249)',
            'box-shadow': 'rgb(191, 114, 224) 0px 0px 5px 0px',
            transition: 'all 1s'
        }).blur(function(){
            $(this).css({
                border: '1px solid rgb(78, 88, 93)',
                'box-shadow': 'rgb(191, 114, 224) 0px 0px 0px 0px',
                transition: 'all 0.5s'
            })
        })

    })
    autoPlay($(".yb_coptxt em").slice(0,3));
    function autoPlay(ele){
        ele.animate( {left : "235px"},1500,function(){
            ele.css({
                left:"218px"
            })
            autoPlay(ele);
        })
    }
    autoLeft($(".yb_coptxt em").slice(4,7));
    function autoLeft(ele){
        ele.animate( {left : "-55px"},1500,function(){
            ele.css({
                left:"-38px"
            })
            autoLeft(ele);
        })
    }
    autoBottom($(".yb_coptxt em").eq(3));
    function autoBottom(ele){
        ele.animate( {top : "93px"},1500,function(){
            ele.css({
                top:"85px"
            })
            autoBottom(ele);
        })
    }
})