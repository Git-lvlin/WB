window.addEventListener('load',function(){
    //商品详情渲染
    if (localStorage.getItem('goods')) {
    
    // 获取商品数据
    var goodsArr = JSON.parse( localStorage.getItem('goods') )
    var upper_left=document.querySelector('.upper_left');
    ajax({
        url:"../json/Product _Details.json",
        type:'get',
        dataType:'json',
        success:function(json){
            var pd_obj='';
                $.each(json,function (index,item){
                    $.each(goodsArr,function (i,obj){
                    if (item.id === obj.id) {

                pd_obj=` <div class="left">
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
                       </div>`
                       upper_left.innerHTML=pd_obj;



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
                }
                
                })
            })
        }
    
    })

    }
})