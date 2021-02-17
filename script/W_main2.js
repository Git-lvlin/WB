window.addEventListener('load',function(){
    var left = $1('.upper_left .left')
    var mask = $1('.upper_left .left .mask')
    var maxBox= $1('.maxBox')
    var maxImg= $1('.maxBox img')
    var lit=document.querySelectorAll('.upper_left .list li');
    var imgsrc=$1('.upper_left .left img');
    var arr=['../images/min1.jpg','../images/min2.jpg','../images/min3.jpg','../images/min4.jpg','../images/min5.jpg'];
    var arr2=['../images/max1.jpg','../images/max2.jpg','../images/max3.jpg','../images/max4.jpg','../images/max5.jpg'];
    var par=0;
    for(let i=0;i<lit.length;i++){
        lit[i].onmouseenter=function(){
            imgsrc.src=arr[i];
            maxImg.src=arr2[i];
            lit[par].style.border="1px solid transparent";
            lit[i].style.border="1px solid red";
            par=i;
        }
    }
    left.onmouseenter = function (){
    maxBox.style.opacity = 1
    left.style.opacity=0
    }
    left.onmouseleave = function (){
    maxBox.style.opacity = 0
    left.style.opacity=1
    }

    left.onmousemove = function (ev){
    var e = ev || event
    // 遮罩层left=鼠标到页面左侧的距离-left容器到最外层的距离-遮罩层宽的一半
    var mask_left = e.pageX - offset(left).left - mask.clientWidth/2
    var mask_top = e.pageY - offset(left).top - mask.clientHeight/2
    // 临界值判断
    if (mask_left <= 0){
        mask_left = 0
    }
    if (mask_left >= (left.clientWidth - mask.clientWidth)){
        mask_left = (left.clientWidth - mask.clientWidth)
    }
    if (mask_top <= 0){
        mask_top = 0
    }
    if (mask_top >= (left.clientHeight - mask.clientHeight)){
        mask_top = (left.clientHeight - mask.clientHeight)
    }
    // 赋值，改变遮罩层定位
    mask.style.left = mask_left + 'px'
    mask.style.top = mask_top + 'px'

    // 移动比例
    var scaleX = mask_left/(left.clientWidth - mask.clientWidth)
    var scaleY = mask_top/(left.clientHeight - mask.clientHeight)
    // 根据比例计算出大图的定位
    var img_left = (maxImg.clientWidth - maxBox.clientWidth)*scaleX
    var img_top = (maxImg.clientHeight - maxBox.clientHeight)*scaleY
    // 赋值，改变大图定位，反向运动
    maxImg.style.left = -img_left + 'px'
    maxImg.style.top = -img_top + 'px'
}


})