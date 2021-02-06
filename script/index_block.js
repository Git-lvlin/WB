window.addEventListener('load',function(){
    var spa=$2('.index_hed span');
    var box_con=$2('.box_con');
    var par=0;
    console.log(spa)
    for(let i=0;i<lit.length;i++){
        lit[i].onmouseenter=function(){
            box_con[par].style.display='none';//上次的隐藏
            lit[par].children[0].className='';//清除上次的样式

            lit[i].children[0].className='ative';//给当前添加类名
            box_con[i].style.display='block';//当前的显示
            par=i;

        }
    }
})