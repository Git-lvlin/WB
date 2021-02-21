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





  //选项卡切换
  var Li=$2('.friend_comment ul li');
  var moudle_con=$2('.moudle_con');
  var par=0;
  for (let i = 0; i < Li.length; i++) {
    Li[i].onmouseenter=function(){
        Li[par].className='';
        Li[i].className='tab_in';
        moudle_con[par].style.display='none';
        moudle_con[i].style.display='block';
        par=i;
    }
  }

  //商品列表渲染
  var sh_list=$1('.sh_list ul');
  ajax({
      url:'../json/s_goods_list.json',
      type:'get',
      dataType:'json',
      success:function(json){
          var s_list='';
          json.forEach(function(item,index){
              s_list+=`<li class="goods">
                        <a href="../views/Product _Details.html" class="s_go_img" data-id="${item.id}">
                            <img src="${item.src}" alt="">
                        </a>
                        <div class="goods_txt">
                            <p class="tPrc">
                                <em>月付</em>
                                <span class="fenqi_price">${item.fenqi_price}</span>
                                <span class="s_price">${item.s_price}</span>
                            </p>
                            <a href="" class="s_go_name elps2">
                            ${item.s_go_name}
                            </a>
                            <div class="goods_sale">
                                <span>${item.sale_tips}</span>/
                                <em>${item.s_sale_num}</em>
                            </div>
                            <a href="" class="s_shop">
                                ${item.s_shop}
                            </a>
                            <p class="sale_tags">
                                免息分期
                            </p>
                            <div class="goods_hover">
                                <a href="" class="add_to_keep">加入收藏</a>
                                <a href="" class="add_to_cart" data-id="${item.id}">加入购物车</a>
                            </div>
                        </div>
                    </li>`
          });
          sh_list.innerHTML=s_list;

      }
  })
    // 点击存储商品id
    $('.sh_list').on('click','.goods>a',function (){
        // 存储商品id
        // "goods"=>"[{'id':'tm1'},{'id':'tm2'}]"
        var id = $(this).attr('data-id')//当前点击商品的id
        var goodsArr = []//购物车数据的数组
          // push一个商品对象的id到goodsArr
          goodsArr.push({"id":id})

        // 数据更新到本地存储
        localStorage.setItem('goods', JSON.stringify(goodsArr) )
        // alert('保存id成功！')
      })

    // 点击加入购物车
    $('.sh_list').on('click','.add_to_cart',function (e){
        e.preventDefault()
        // 存储商品id和数量
        // "shoppingArr"=>"[{'id':'tm1','num':2},{'id':'tm2','num':1}]"
        var id = $(this).attr('data-id')//当前点击商品的id
        var shoppingArr = []//购物车数据的数组
        if (localStorage.getItem('shopping')) {
            shoppingArr = JSON.parse( localStorage.getItem('shopping') )
        }
        // 标记购物车是否已有该商品
        var flag = false
        // 判断购物车是否已有该商品
        $.each(shoppingArr,function (index,item){
        if (item.id === id) {//购物车已该商品
            item.num++//商品数量+1
            flag = true
        }
        })
        if (!flag) {
        // push一个商品对象到shoppingArr
        shoppingArr.push({"id":id,"num":1})
        }
        // 数据更新到本地存储
        localStorage.setItem('shopping', JSON.stringify(shoppingArr) )
        alert('加入购物车成功！')
    })

 
})


