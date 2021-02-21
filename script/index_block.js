window.addEventListener('load',function(){
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
})