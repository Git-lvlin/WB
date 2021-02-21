window.addEventListener('load',function(){
    var Li=document.querySelectorAll('#pt-shop_nav li');
    var par=0;
    for (let i = 0; i < Li.length; i++) {
        Li[i].onmouseenter=function(){
            Li[par].children[0].className='';
            Li[i].children[0].className='on';
            par=i;
        }
    }

})