window.addEventListener('load',function(){
    var logo_s=$1('.logo_s');
    var logo_txt=$1('.logo_s .logo_txt');
    var sp=$1('.logo_s span');
    logo_txt.onfocus=function(){
        logo_s.removeChild(sp);
    }
})