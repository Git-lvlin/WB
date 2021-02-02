window.addEventListener('load', () => {
//滚动轮播
var mainx=document.querySelector('.list2 .main');//产生滚动条的盒子
var mainbox=document.querySelector('.mainbox');//包括图片的盒子
var marp1=$1('.marp');
var marpwidth=marp1.clientWidth;//第一列照片的宽度
var marp=document.querySelectorAll('.marp');//排列图片集合
var imgindex=0;//当前索引
var lprev=$1('.list2 .leftprev');
var rnext=$1('.list2 .rightnext');
var timer;
// 在末尾添加第一张图片
var firstimg=marp1.cloneNode(true);
mainbox.appendChild(firstimg);

//进入页面自动播放
autopaly();

function autopaly(){
    timer=setInterval(function(){
        nextmove();
    },4000)
}
//移动到下一张
function nextmove(){
    imgindex++;

    if(imgindex>marp.length){
        imgindex=1;//到达最后一张，接下来应该显示第二张图片
        mainx.scrollLeft=0;//滚动条设置到0的位置
    }
    // 滚动条执行动画
    animate(mainx,{'scrollLeft':imgindex*marpwidth});
}
//移动到上一张
function permove(){
    imgindex--;

    if(imgindex<0){
        imgindex=marp.length-1;//到达第一张，接下来应该显示倒数第二张图片
        mainx.scrollLeft=marp.length*marpwidth;//滚动条设置到最后一张图片的位置
    }
    // 滚动条执行动画
    animate(mainx,{'scrollLeft':imgindex*marpwidth});
}

// 点击下一页
rnext.onclick = function (){
    // 停止自动播放
    clearInterval(timer)
    // 切换到下一张
    nextmove()
    // 启动自动播放
    autopaly();
  }
  
  // 点击上一页
lprev.onclick = function (){
    // 停止自动播放
    clearInterval(timer)
    // 切换到下一张
    permove()
    // 启动自动播放
    autopaly();
  }
})