window.addEventListener('load',function(){
    // 排行榜选项卡切换
    var spa=$2('.gnTabs span');
    var box_con=$2('.gnTabs_block .box_con');
    var par=0;
    for(let i=0;i<spa.length;i++){
        spa[i].onmouseenter=function(){
            spa[par].className='';//清除上次的样式
            spa[par].children[0].className='';//清除上次的样式
            box_con[par].className='box_con';//清除上次的样式

            spa[i].className='on';//给当前添加类名
            spa[i].children[0].className='bk';//给当前添加类名
            box_con[i].className='sbox';//给当前添加类名
            par=i;

        }
    }
    var per=0;
    var span=$2('.list_span span');
    var box_con2=$2('.brand_list');
    for(let i=0;i<span.length;i++){
        span[i].onmouseenter=function(){
            span[per].className='';//清除上次的样式
            span[per].children[0].className='';//清除上次的样式
            box_con2[per].className='brand_list';//清除上次的样式

            span[i].className='on';//给当前添加类名
            span[i].children[0].className='bk';//给当前添加类名
            box_con2[i].className='brand_list lbox';//给当前添加类名
            per=i;

        }
    }

      // 点击存储商品id
      $('#W_index_block').on('click','.wb',function (){
        // 存储商品id
        // "goods"=>"[{'id':'tm1'},{'id':'tm2'}]"
        var id = $(this).attr('data-id')//当前点击商品的id
        var goodsArr = []//购物车数据的数组
          // push一个商品对象的id到goodsArr
          goodsArr.push({"id":id,"price":88888,"s_go_name":"瑞士 爱宝时（EPOS）-Emotion情感系列 日夜无间 3390.302.20.38.25 机械男表"})

        // 数据更新到本地存储
        localStorage.setItem('goods', JSON.stringify(goodsArr) )
        // alert('保存id成功！')
      })
})