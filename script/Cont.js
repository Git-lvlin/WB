window.addEventListener('load',function(){
    var litr=$2('.Cont ul li');
    var Control=$2('.Control');
    var pars=0;
    for(let i=0;i<litr.length;i++){
        litr[i].onmouseenter=function(){
            Control[pars].style.display='none';//上次的隐藏
            litr[pars].className='';//清除上次的样式
            litr[pars].children[0].className='';//清除上次的样式

            litr[i].className='clor';//给当前添加类名
            litr[i].children[0].className='bin';
            Control[i].style.display='block';//当前的显示
            pars=i;

        }
    }
})