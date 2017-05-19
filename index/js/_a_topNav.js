$(function(){

    var ul = document.getElementById("naviUl");
    var ulLiArr = $(ul).children('li');
    var blueLine = document.getElementById("blueLine");
    var lineWidth = blueLine.offsetWidth;
    var index;
    for(var i = 0; i < ulLiArr.length; i++) {
        ulLiArr[i].index = i;
        ulLiArr[i].onmouseover = function () {
            JSanimate(blueLine,{left: this.index*lineWidth});
        }
    }


    function JSanimate(ele,json,fn){
        clearInterval(ele.timer);
        ele.timer = setInterval(function(){
            var flag = true;
            for(var key in json){
                if(key === "z-index"){
                    ele.style[key] = json[key];
                }else if(key === "opacity"){
                    if(parseInt(JSgetStyle(ele,key))*100 === 0){
                        var leader = 0;
                    }else{
                        var leader = parseInt(JSgetStyle(ele,key))*100 || 100;
                    }
                    var step = (parseInt(json[key]*100) - leader) /10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader += step;
                    ele.style.opacity = leader / 100;
                    ele.style.filter = "alpha(opacity=" + leader + ")";
                    if(parseInt(json[k]*100) !== leader){
                        flag = false;
                    }
                }
                else {
                    var leader = parseFloat(JSgetStyle(ele,key)) || 0;
                    var step = (json[key] - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.ceil(step);
                    leader += step;
                    ele.style[key] = leader + 'px';
                    if(json[key] !== leader){
                        flag = false
                    }
                }
            }
            if(flag){
                clearInterval(ele.timer);
                if(fn){
                    fn();
                }
            }
        },15)
    }
    function JSgetStyle(ele,attr) {
        if (window.getComputedStyle !== undefined) {
            return window.getComputedStyle(ele, null)[attr];
        }
        else {
            return ele.currentStyle[attr];
        }
    }

});