window.addEventListener('load',function(){
    // var logo_s=$1('.logo_s');
    var logo_txt=document.querySelector('.logo_s .logo_txt');
    var sp=document.querySelector('.logo_s span');
    logo_txt.onfocus=function(){
        sp.style.zIndex=-10;
    }
    logo_txt.onblur=function(){
        sp.style.zIndex=1;
    }
})
