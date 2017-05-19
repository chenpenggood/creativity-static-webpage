$(function(){

    //注意事项同之前一样
//APP部分JS开始
    var height1=$(".ccw_content2_center").offset().top-500;
   var flag=true;
    window.addEventListener("scroll",app_whyChose) ;
    function app_whyChose(){
        if($(document).scrollTop() >height1){
         if(flag){
             flag=false;
             $(".ccw_main").stop().animate({"margin-top":"45px"},300,function(){
                 $(".ccw_main").stop().animate({"margin-top":"85px"},200,function(){

                 })

             });
         }
        }else{
            $(".ccw_main").stop().animate({"margin-top":"500px"},300);
            flag=true;
        }

    }
 //APP部分JS结束
});