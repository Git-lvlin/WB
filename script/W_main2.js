window.addEventListener('load',function(){
    //商品详情渲染
    if (localStorage.getItem('goods')) {
    
    // 获取商品数据
    var goodsArr = JSON.parse( localStorage.getItem('goods') )
    var W_detail=document.querySelector('.W_detail');
    ajax({
        url:"../json/Product _Details.json",
        type:'get',
        dataType:'json',
        success:function(json){
            var pd_obj='';
                $.each(json,function (index,item){
                    $.each(goodsArr,function (i,obj){
                    if (item.id === obj.id) {

                pd_obj=`<div class="upper_left fl">
                       <div class="left">
                            <img src="${json[index].minsrc[0]}" alt="">
                            <div class="mask"></div>
                        </div>
                        <div class="maxBox">
                            <img src="${json[index].maxsrc[0]}" alt="">
                        </div>
                        <div class="minlist">
                            <ul class="list">
                                    <li><img src="${json[index].minsrc[0]}" alt=""></li>
                                    <li><img src="${json[index].minsrc[1]}" alt=""></li>
                                    <li><img src="${json[index].minsrc[2]}" alt=""></li>
                                    <li><img src="${json[index].minsrc[3]}" alt=""></li>
                                    <li><img src="${json[index].minsrc[4]}" alt=""></li>
                            </ul>
                       </div>
                       </div>
                       <div class="upper_right fl">
                        <!-- 商品名称 -->
                        <div class="upper_title">${obj.s_go_name}</div>
                        <div class="upper_xuyan">畅销爆款 王阳明同款 把握时机 才是赢家 独特24小时制昼夜显示<span>咨询优惠>></span></div>
                        <div class="upper_model">
                            <span>型号: 3390.302.20.38.25</span>
                            <span>编号: 42500</span>
                            <span>品牌: 爱宝时</span>
                            <span>销量: 2953</span>
                        </div>
                        <!-- 价格 -->
                        <div class="upper_price">
                            <p class="p1">
                                <b>分期</b>
                                <em>￥</em>
                                <i>${obj.price}</i>x12期
                                <span><i></i> 免息免手续费</span>
                            </p>
                            <p class="p2"><b>市场价</b><span>￥11,800</span></p>
                            <p class="p3"><b>领劵</b><span>   ¥1785  单品现金券</span><a>更多</a></p>
                            <p class="p4"><b>促销</b><span>［满减］每满300减85元</span></p>
                        </div>
                        <!-- 配送 -->
                        <div class="upper_give">
                            <span>配送</span>
                            <p><i>（顺丰包邮）</i>  17:30前支付，预计1-3个工作日内发货，支持货到付款 </p>
                        </div>
                        <!-- 承诺 -->
                        <div class="promise">
                            <span>承诺</span>
                            <ul>
                                <li><i></i>正品保障</li>
                                <li><i></i>正规发票</li>
                                <li><i></i>假一赔三</li>
                                <li><i></i>7天退换</li>
                                <li><i></i>全球联保</li>
                                <li><i></i>实体店体验</li>
                                <li><i></i>闪电发货</li>
                                <li><i></i>货到付款</li>
                            </ul>
                        </div>
                        <!-- 服务 -->
                        <div class="service">
                            <span>服务</span>
                            <a href=""><span>万表名匠提供全国联保</span><i></i></a>
                            <a href=""><span>100%正品二手表库</span><i></i></a>
                        </div>
                        <!-- 款式 -->
                        <div class="upper_style">
                            <span>款式</span>
                            <div>
                                <a href=""><img src="../images/upper_style-1.jpg" alt=""><span>真皮 灰色 牛皮</span></a>
                                <a href=""><img src="../images/upper_style-2.jpg" alt=""><span>真皮 黑色 白色 牛皮</span></a>
                                <a href=""><img src="../images/upper_style-3.jpg" alt=""><span>钢 黑色 白色 图案 精钢</span></a>
                                <a href=""><img src="../images/upper_style-4.jpg" alt=""><span>钢 黄金 黑色 白色 图案 精钢</span></a>
                            </div>
                        </div>
                        <!-- 数量 -->
                        <div class="upper_number">
                            <span>数量</span>
                            <div class="number_right">
                                <span class="fl reduce">-</span>
                                <input type="text" value="1">
                                <span class="fl plus">+</span>
                            </div>
                        </div>
                        <!-- 立即购买 -->
                        <div class="upper_button">
                            <div class="button_a"><a href="../views/shoppingcart.html">立即购买</a></div>
                            <div data-id="${obj.id}" class="button_b">加入购物车</div>
                            <div class="qr-code fl">
                                <p class="icon"><img src="../images/detail_qrcode.png"></p>
                                <p class="text">点击领优惠</p>
                            </div>
                        </div>
                    </div>
                       `
                       W_detail.innerHTML=pd_obj;


                       //放大镜
                       var left = $1('.upper_left .left')
                       var mask = $1('.upper_left .left .mask')
                       var maxBox= $1('.maxBox')
                       var maxImg= $1('.maxBox img')
                       var lit=document.querySelectorAll('.upper_left .list li');
                       var imgsrc=$1('.upper_left .left img');
                       var arr=json[index].minsrc;//获取的小图数组
                       var arr2=json[index].maxsrc;//获取的大图数组
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

                       // 点击加入购物车
                        $('.upper_right').on('click','.button_b',function (){
                          if(localStorage.getItem('login')){
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
                          }else{
                              alert("请先登录")
                          }
                        })

                }
                
                })
            })
        }
    
    })

    }
})