window.addEventListener('load', () => {
//滚动轮播2
var listbox=$1('.listbox');//产生滚动条的父级盒子
var puter=$1('.listbox .puter');//包括图片的最外层盒子
var pu=$2('.puter div');//轮播盒子
var puwidth=pu[0].clientWidth;//一张图片的宽度
var seccor=0;//当前图片索引
var num=$2('.list3 ul li');
var pop=0;// 当前页码的索引
// 在末尾添加第一张图片
var lastimg=pu[0].cloneNode(true);
puter.appendChild(lastimg);
var timer;

//页面加载自动播放
autoty() 
function autoty () {
    timer=setInterval(function(){
        nex_img()//切换下一张
    },2000)
}

//切换下一张
function nex_img(){
    //图片切换
    seccor++;
    if(seccor>pu.length){
        seccor=1;
        listbox.scrollLeft=0;
    }

    animate(listbox,{'scrollLeft':seccor*puwidth});
    //符号切换
    num[pop].className='';//清除上一个符号样式
    pop++;
    if(pop>=num.length){
        pop=0;
    }
    num[pop].className='active';//当前符号添加样式
}
//移上符号切换图片
for(let i=0;i<num.length;i++){
    num[i].onmouseenter=function(){
        clearInterval(timer);
        num[pop].className='';//清除上一个符号样式
        num[i].className='active';//当前符号添加样式
        animate(listbox,{'scrollLeft':i*puwidth});
        pop=i;
    }
    num[i].onmouseleave=function(){
        autoty() 
    }
}
})

