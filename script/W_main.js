window.addEventListener('load',function(){
    // 轮播图
    var main=$1('.list_act .main');//产生滚动条的盒子
    var con1=$1('.list_act .con1');
    var imgs=$2('.con1 img');//所有图片
    var img1=imgs[0];//第一张图片
    var nums=$2('.pager i');//页码
    var timer;//定时器
    var imgIndex=0;//当前索引
    var pageIndex=0;//上一次的索引
    var imgWidth=img1.clientWidth;//一张图片的宽度
    // 在末尾添加第一张图片
    var firstImg = img1.cloneNode(true);
    con1.appendChild(firstImg);
    //自动播放
     autoPlay()
    function  autoPlay(){
        timer=setInterval(function(){
            nextmove()//切换下一张
        },2000)
    }
    //切换下一张
    function nextmove(){
        imgIndex++;
        if(imgIndex>imgs.length){
            imgIndex=1;//到达最后一张，接下来应该显示第二张图片
            main.scrollLeft=0//滚动条设置到0的位置
        }
        // 滚动条执行动画
        animate(main,{'scrollLeft':imgIndex*imgWidth})

        //清除上次的类名
        nums[pageIndex].className='';

        // 当前点击的页码添加类名
        pageIndex++
        if (pageIndex >= nums.length) {
            pageIndex = 0
        }
        // 当前页码添加类名
        nums[pageIndex].className = 'show'
    }

    // 点击页码切换图片
for (var i = 0, len = nums.length; i < len; i++){
    nums[i].index = i
    nums[i].onclick = function (){
    // 停止自动播放
    clearInterval(timer)
    // 切换图片
    imgIndex = this.index
    animate(main,{'scrollLeft':imgIndex*imgWidth})
    // 启动自动播放
    autoPlay()
    // 清除上次的类名
    nums[pageIndex].className = ''
    // 当前点击的页码添加类名
    nums[this.index].className = 'show'
    // 更新上次的页码
    pageIndex = this.index
    }
  }
})