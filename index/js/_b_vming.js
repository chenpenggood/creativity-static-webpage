$(function(){

    var gfmain = $(".main");
    var gfg = $(".main>.w>div");
    var gfArrL = [];     //元素基准点数组
    var gfArrT = [];

    for(var gf = 0; gf < gfg.length; gf++){
        gfArrL.push( parseInt(gfg.eq(gf).css("left")));
        gfArrT.push( parseInt(gfg.eq(gf).css("top")));
    }

    var gfx;    //鼠标坐标
    var gfy;

    var minX = gfmain.position()["left"];   //图片起始点
    var minY = gfmain.position()["top"];

    var midX = minX + (gfmain.width())/2;   //图片中间点（生成动态效果用）
    var midY = minY + (gfmain.height())/2;

    var maxY = gfmain.position()["top"] + gfmain.height();  //防溢出


    $(document).mousemove(function(event) {
        gfx = parseInt(event.pageX) - midX;
        gfy = parseInt(event.pageY) - midY;

        if(gfy<maxY){
            for (var i = 1; i < gfg.length; i++) {
                gfg.eq(i).css("left", gfArrL[i] - (gfx * i * i / 256));
                gfg.eq(i).css("top", gfArrT[i] - (gfy * i * i / 256));
            }
        }
    });









});