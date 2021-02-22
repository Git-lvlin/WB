window.addEventListener('load',function(){
 var Wcart=$1('.W-cart');
//判断是否已登录
 if(localStorage.getItem('login')){
    if(localStorage.getItem('shopping')){
        // 获取购物车数据
        var shopping=JSON.parse(localStorage.getItem('shopping'));
        //加入购物车的商品数量
        var allQuantity=$1('#allQuantity');
        allQuantity.innerHTML=shopping.length;
        var content=$1('.cart-content');//包括加入的商品
        $.ajax({
            url:"../json/s_goods_list.json",
            type:'get',
            dataType:'json',
            success:function(json){
                var domStr='';
                $.each(json,function(index,item){
                    $.each(shopping,function(i,obj){
                        if (item.id === obj.id) {
                           
                        domStr+=`
                        <div class="W_store_floor">
                        <div class="store_top">
                            <input type="checkbox" id="fag">
                            <label for="fag">${item.s_shop}</label>
                            <span class="get_span">领券</span>
                        </div>
                        <div class="goods_floor">
                            <input type="checkbox" class='fag'>
                            <div class="goods_info">
                                <a class="act_link">
                                    <span class="mj_tag">满减</span>
                                    <p class="act_txt">每满300减85元</p>
                                </a>
                                <a href="#" target="_blank" class="goods_a">
                                    <div class="goods_img fl">
                                            <img src="${item.src}" alt="">
                                    </div>
                                    <div class="goods_txt fl">
                                            <p class="p1">${item.s_go_name}</p>
                                            <p class="p2">真皮 银色</p>
                                    </div>
                                </a>
                                <ul class="fr">
                                    <li class="unit_price"> ¥<em class="pic">${item.s_price}</em></li>
                                    <li class="goods_num"> 
                                        <button class="reduce">-</button>
                                        <input type="text" class="num" value="${obj.num}" data-stock="4"> 
                                        <button class="add">+</button>
                                    </li>
                                    <li class="total_price">¥<em class="subTotal">${item.s_price*obj.num}</em></li>
                                    <li class="others"> 
                                        <a href="" class="delete_goods" data-id="${item.id}">删除</a>
                                        <a href="" class="to_collection">移入收藏</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>`
                        }
                    })
                })
                content.innerHTML=domStr;
                
    // 删除商品
    $('.W_store_floor').on('click','.delete_goods',function (e){
        alert('删除成功')
        e.preventDefault()
        // 当前点击的商品id
        var id = $(this).attr('data-id')

         //删除之后判断剩余商品的总价格
        var pirc=parseInt($(this).parents('.others').prev('.total_price').children('em').text());
        var sum=$('.settle_price i').html()-pirc;
        $('.settle_price i').html(sum)

        $.each(shopping,function (index,item){
        if (item.id === id) {
            shopping.splice(index,1)
            return false
        }
        })
        
        // 删除dom结构
        $(this).parents('.W_store_floor').remove()
        // 更新本地存储的数据
        localStorage.setItem('shopping',JSON.stringify(shopping))
        if (shopping.length <= 0) {
        $('.W_settle_floor').hide()
        localStorage.removeItem('shopping')
        var newLi = '<p>购物车暂无数据！</p>'
        $('.cart-content').html(newLi)
        }
         // 判断是否需要全选
         var checks = $2('.cart-content .fag')
         var all=$1('#for');
         var choose_num=$1('.choose_num em');
         for (var i = 0, len = checks.length; i < len; i++){
             if (!checks[i].checked) {
               return
             }
            //删除之后的商品数量
             choose_num.innerHTML=i+1;
           }
         all.checked = true//删除之后全部都勾选的全部都勾选

        
       


    })

    //减少商品数量
    $('.W_store_floor').on('click', '.reduce', function () {
        var aa = $(this).parents('.goods_num').siblings('.others').children('.delete_goods').attr("data-id");
        // location.reload()//刷新页面
        var _this = this
        $.each(shopping, function (index, item) {
          if (item.id === aa) {
            var sum = item.num - 1
            $(_this).next().val(sum) //商品数量-1
            item.num = sum;
            console.log(sum)
            if (sum <= 1) { //判断小于1不可用
              $(_this).prop('disabled', 'disabled')
              console.log($(_this).prop('disabled', 'disabled'))
            }
          }
        })
        localStorage.setItem('shopping',JSON.stringify(shopping))
      })
    //增加商品数量
    $('.W_store_floor').on('click', '.add', function () {
    var aa = $(this).parents('.goods_num').siblings('.others').children('.delete_goods').attr("data-id");
    var _this = this
    $.each(shopping, function (index, item) {
        if (item.id === aa) {
        var sum = item.num + 1
        $(_this).prev().val(sum) //商品数量+1
        item.num = sum;
        if (sum > 1) { //判断大于1可用
            $(_this).siblings('.reduce').removeAttr('disabled')
        }
        }
    })
    localStorage.setItem('shopping',JSON.stringify(shopping))
    })

       // 选中展示价格
        var checks = $2('.cart-content .fag');
        var sum=0;
        $.each(checks,function(index,item){
        item.onclick=function(){
            // console.log(sum)
        var pic=parseInt($(item).siblings('.goods_info').children('ul').children('.total_price').children('em').text());
        if($(item).prop('checked')){
           sum+=pic 
        $('.settle_price i').html(sum)
        }else if(!$(item).prop('checked')){
            var box=parseInt($('.settle_price i').html())
            box-=pic
          $('.settle_price i').html(box)
        }
       }
       })
    

       // 点击勾选任务(事件委托)
       var all=$1('#for');
       $('.cart-content').on('click','.fag',function(){
            // 判断是否需要全选
            var checks = $2('.cart-content .fag')
            var flag = 1
            for (var i = 0, len = checks.length; i < len; i++){
            if (!checks[i].checked) {
                flag = 0
            }
            }
            if (flag) {
            all.checked = true
            } else {
            all.checked = false
            }
        })
  

      //全选
      all.onclick=function(){
      var checks2 = $2('.cart-content #fag');
      var checks = $2('.cart-content .fag');
      var choose_num=$1('.choose_num em');
        var num=0;
        var pics=0;
        if (all.checked) {
            for (var i = 0, len = checks.length; i < len; i++){
                var pic=parseInt($(checks[i]).siblings('.goods_info').children('ul').children('.total_price').children('em').text());
                pics+=pic
              checks[i].checked = true
              checks2[i].checked=true
              num+=1
              
              $('.settle_price i').html(pics)//全部价格
              choose_num.innerHTML=num;//已选数量
            }
            
        }else{
            for (var i = 0, len = checks.length; i < len; i++){
                checks[i].checked = false
                checks2[i].checked=false
                choose_num.innerHTML=0;
              }
              sum=0;//把已经累积的变量清零
              //全选不选价格清零
              $('.settle_price i').html(0)
        }
      }

      //判断选了多少个
    $('.cart-content').on('click','.fag',function(){
        var choose_num=$1('.choose_num em');
        var chek=0;
        var checks = $2('.cart-content .fag');
        var checks2 = $2('.cart-content #fag');
        for (let i = 0, len = checks.length; i < len; i++){
            if(checks[i].checked){
            checks2[i].checked=true;
            chek+=1
          }else{
            checks2[i].checked=false;
          }
        }

        choose_num.innerHTML=chek;
    })
    //选择旗舰店商品也跟着选择
    $('.cart-content').on('click','#fag',function(){
        var checks = $2('.cart-content .fag');
        var checks2 = $2('.cart-content #fag');
        for (let i = 0, len = checks2.length; i < len; i++){
            if(checks2[i].checked){
            checks[i].checked=true;
          }else{
            checks[i].checked=false;
          }
        }
    })

     

      // 批量删除
      var dele=$1('.delete_goods em');
      dele.onclick = function (){
        var checks = $2('.cart-content .fag')
        for (var i = 0, len = checks.length; i < len; i++){
          if (checks[i].checked) {
            //删除本地缓存
            var id = $(checks[i]).siblings('.goods_info').children('ul').children('.others').children('.delete_goods').attr('data-id')
            $.each(shopping,function (index,item){
            if (item.id === id) {
                shopping.splice(index,1)
                return false
            }
            })
             // 删除当前任务
             checks[i].parentNode.parentNode.parentNode.removeChild(checks[i].parentNode.parentNode)
           
          }
        }
          // 更新本地存储的数据
          localStorage.setItem('shopping',JSON.stringify(shopping))
          if (shopping.length <= 0) {
          $('.W_settle_floor').hide()
          localStorage.removeItem('shopping')
          var newLi = '<p>购物车暂无数据！</p>'
          $('.cart-content').html(newLi)
          }
      }

      //结算
      $('.settle_btn a').on('click',function(){
          alert('对不起，你没钱')
      })


        }
    })


    }
    //删除后显示的内容
        var newLi = '<p class="hide">购物车暂无数据！</p>'
        $('.cart-content').html(newLi)
 }else{
    //  未登录时显示的内容
    Wcart.innerHTML=`<div class="cart_empty">
                        <i></i>
                        <p class="p1">你的购物车还是空的</p>
                        <p class="p2 empty-login-tips">现在
                            <a href="../views/login.html" class="to_login">登录</a>
                            ，购物车信息将一直为您保存
                        </p>
                        <div class="cart_btn">
                            <a href="../views/index.html" class="goto_shoping">马上购物</a>
                            <a href="https://pu.wbiao.cn/member/collection" class="look_collect">看看收藏</a>
                        </div>
                    </div>`
    
 }

 

})