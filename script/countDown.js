window.addEventListener('load', () => {
var list1=document.querySelector('.centent_top ul .list1');
function show(){
    var aInput=document.querySelectorAll('.centent_top ul .list1 i');
    var today=new Date();
    var Endtime=new Date("2021/02/06,00:00:00");
    var t=Endtime.getTime()-today.getTime();
    var seconds=Math.floor(t/1000);
    var h=Math.floor(seconds/60/60%24);
    var m=Math.floor(seconds/60%60);
    var s=seconds%60;
    aInput[0].innerHTML=Math.floor(h/10);
    aInput[1].innerHTML=h%10;
    aInput[2].innerHTML=Math.floor(m/10);
    aInput[3].innerHTML=m%10;
    aInput[4].innerHTML=Math.floor(s/10);
    aInput[5].innerHTML=s%10;
}
setInterval(show,1000);
})
