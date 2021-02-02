window.addEventListener('load',function(){
    var exhbox=$1('.exhbox');
    var con1=$1('.map .con1');
    var con2=$1('.map .con2');
    var maxwidth=con1.clientWidth;
    con2.innerHTML=con1.innerHTML;//复制一份
    var timer;
    function run(){
        timer=setInterval(function(){
            exhbox.scrollLeft+=2;
            if(exhbox.scrollLeft>=maxwidth){
                exhbox.scrollLeft=0
            }
        },20)
    }
    run()
    exhbox.onmouseenter=function(){
        clearInterval(timer)//清除计时器
    }
    exhbox.onmouseleave=function(){
        run()
    }
})