window.addEventListener('load', () => {
// navjs
//左边导航栏
var linkspn = $2('.select .box1 span'); //获取所有span
var pervious = 0; //上一次点击
var current = 0; //当前点击
for (var i = 0; i < linkspn.length; i++) {
    linkspn[i].index = i;
    linkspn[i].onclick = function () {
        linkspn[pervious].children[0].className = "";
        linkspn[this.index].children[0].className = "avtice";
        pervious = this.index;
    }
}

//京东logo效果
var  logo=$1('.logo_link img');
var  logotxt=$1('.logotxt');
var logo_link=$1('.logo_link');
logo.onmouseenter=function(){
    this.src="../images/JDmedia.gif";
    logo_link.marginBottom=20+'px';
    this.className='show';
    setTimeout(function(){
        logotxt.style.display="block";
    },2000)
}
logo.onmouseleave=function(){
    setTimeout(function(){
        logo.src="../images/京东_18.jpg";
        logo.className='';
        logotxt.style.display="none";
    },3000)
}



//右边导航栏
// var Ul = document.querySelector(".nav_bax ul");
// var Li = Ul.children;
// var phonejd=$1('.phonejd');
// var obje = {
//     x: ['待处理订单', '消息', '待处理订单', '消息', '待处理订单', '消息', '待处理订单', '消息', '待处理订单', '消息']
// };

// function fn(dom) {
//     dom.children[0].className = "active";
//     var div1 = document.createElement('div');
//     for (var i = 0; i < obje.x.length; i++) {
//         div1.innerHTML += '<span>' + obje.x[i] + '</span>';
//     }
//     dom.appendChild(div1);
//     dom.onmouseleave = function () {
//         dom.removeChild(div1);
//         dom.children[0].className = "";
//     }
// }
// Li[3].onmouseenter = function () {
//     fn(this)
// }
// Li[5].onmouseenter = function () {
//     fn(this)
// }
// Li[6].onmouseenter = function () {
//     fn(this)
// }
// Li[7].onmouseenter = function () {
//     fn(this)
// }
// Li[8].onmouseenter = function () {
//     this.children[0].className = "active";
//     phonejd.style.display='block';
//     this.onmouseleave = function () {
//         this.children[0].className = "";
//         phonejd.style.display='none';
//     }
// }

//菜单栏
var listbox = document.querySelector(".banner_02");
var lit = document.querySelectorAll('.list li');
var header = document.querySelector('#header');
var moveimg = document.querySelector('#header .moveimg');
moveimg.onclick = function () {
    header.style.display = "none";
}
var arr = [`<ol><li><a href="">家电馆</a></li>
<li><a href="">家电专卖店 ></a></li>
<li><a href="">家电服务 ></a></li>
<li><a href="">企业采购 ></a></li>
<li><a href="">商用电器 ></a></li>
<li><a href="">高价回收 ></a></li></ol>
<p><a> 电视></a> <a> 超薄电视</a> <a> 全面屏电视</a> <a> 智能电视</a> <a> 教育电视</a> <a> OLED电视</a> <a> 智慧屏
</a> <a> 4K超清电视</a> <a> 55英寸</a> <a> 65英寸</a> <a> 电视配件</a></p>
<p><a> 电视></a> <a> 超薄电视</a> <a> 全面屏电视</a> <a> 智能电视</a> <a> 教育电视</a> <a> OLED电视</a> <a> 智慧屏
</a> <a> 4K超清电视</a> <a> 55英寸</a> <a> 65英寸</a> <a> 电视配件 </a></p>
<p><a> 电视></a> <a> 超薄电视</a> <a> 全面屏电视</a> <a> 智能电视</a> <a> 教育电视</a> <a> OLED电视</a> <a> 智慧屏
</a> <a> 4K超清电视</a> <a> 55英寸</a> <a> 65英寸</a> <a> 电视配件 </a></p>
<p><a> 电视></a> <a> 超薄电视</a> <a> 全面屏电视</a> <a> 智能电视</a> <a> 教育电视</a> <a> OLED电视</a> <a> 智慧屏
</a> <a> 4K超清电视</a> <a> 55英寸</a> <a> 65英寸</a> <a> 电视配件 </a></p>
<p><a> 电视></a> <a> 超薄电视</a> <a> 全面屏电视</a> <a> 智能电视</a> <a> 教育电视</a> <a> OLED电视</a> <a> 智慧屏
</a> <a> 4K超清电视</a> <a> 55英寸</a> <a> 65英寸</a> <a> 电视配件 </a></p>
<p><a> 电视></a> <a> 超薄电视</a> <a> 全面屏电视</a> <a> 智能电视</a> <a> 教育电视</a> <a> OLED电视</a><a> 智慧屏
</a> <a> 4K超清电视</a> <a> 55英寸</a> <a> 65英寸</a> <a> 电视配件 </a></p>
<p><a> 电视></a> <a> 超薄电视</a> <a> 全面屏电视</a> <a> 智能电视</a> <a> 教育电视</a> <a> OLED电视</a> <a> 智慧屏
</a> <a> 4K超清电视</a> <a> 55英寸</a> <a> 65英寸</a> <a> 电视配件 </a></p>
<p><a> 电视></a> <a> 超薄电视</a> <a> 全面屏电视</a> <a> 智能电视</a> <a> 教育电视</a> <a> OLED电视</a><a> 智慧屏
</a> <a> 4K超清电视</a> <a> 55英寸</a> <a> 65英寸</a> <a> 电视配件 </a></p>`, 

`<ol><li><a href="">家电馆</a></li>
<li><a href="">家电专卖店 ></a></li>
<li><a href="">家电服务 ></a></li>
<li><a href="">企业采购 ></a></li>
<li><a href="">商用电器 ></a></li></ol>`, 
`<ol><li><a href="">家电馆</a></li>
<li><a href="">家电专卖店 ></a></li>
<li><a href="">家电服务 ></a></li>
<li><a href="">企业采购 ></a></li>
<li><a href="">商用电器 ></a></li></ol>
<p>
    <a> 电视></a> <a> 超薄电视</a> <a> 全面屏电视</a> <a> 智能电视</a> <a> 教育电视</a> <a> OLED电视</a> <a> 智慧屏</a> <a> 4K超清电视</a> <a> 55英寸</a> <a> 65英寸</a> <a> 电视配件</a>
</p>`,
`<ol><li><a href="">家电馆</a></li>
<li><a href="">家电专卖店 ></a></li>
<li><a href="">家电服务 ></a></li>
<li><a href="">企业采购 ></a></li>
<li><a href="">商用电器 ></a></li></ol>
<a href="">电脑</a>/<a href="">办公</a>`,
`<ol><li><a href="">家电馆</a></li>
<li><a href="">家电专卖店 ></a></li>
<li><a href="">家电服务 ></a></li>
<li><a href="">企业采购 ></a></li>
<li><a href="">商用电器 ></a></li></ol>
<a href="">家居</a>/<a href="">家具</a>/<a href="">家装</a>/<a href="">厨具</a>`,
`<ol><li><a href="">家电馆</a></li>
<li><a href="">家电专卖店 ></a></li>
<li><a href="">家电服务 ></a></li>
<li><a href="">企业采购 ></a></li>
<li><a href="">商用电器 ></a></li></ol> 
<a href="">男装</a>/<a href="">女装</a>/<a href="">童装</a>/<a href="">内衣</a>`, 
`<ol><li><a href="">家电馆</a></li>
<li><a href="">家电专卖店 ></a></li>
<li><a href="">家电服务 ></a></li>
<li><a href="">企业采购 ></a></li>
<li><a href="">商用电器 ></a></li></ol>
<a href="">美妆</a>/<a href="">个护清洁</a>/<a href="">宠物</a>`,
`<ol><li><a href="">家电馆</a></li>
<li><a href="">家电专卖店 ></a></li>
<li><a href="">家电服务 ></a></li>
<li><a href="">企业采购 ></a></li>
<li><a href="">商用电器 ></a></li></ol>
 <a href="">女鞋</a>/<a href="">箱包</a>/<a href="">钟表</a>/<a href="">珠宝</a>`,
` <ol><li><a href="">家电馆</a></li>
<li><a href="">家电专卖店 ></a></li>
<li><a href="">家电服务 ></a></li>
<li><a href="">企业采购 ></a></li>
<li><a href="">商用电器 ></a></li></ol>
 <a href="">男鞋</a>/<a href="">运动</a>/<a href="">户外</a>`,
` <ol><li><a href="">家电馆</a></li>
<li><a href="">家电专卖店 ></a></li>
<li><a href="">家电服务 ></a></li>
<li><a href="">企业采购 ></a></li>
<li><a href="">商用电器 ></a></li></ol>
 <a href="">房产</a>/<a href="">汽车</a>/<a href="">汽车用品</a>`,
` <ol><li><a href="">家电馆</a></li>
<li><a href="">家电专卖店 ></a></li>
<li><a href="">家电服务 ></a></li>
<li><a href="">企业采购 ></a></li>
<li><a href="">商用电器 ></a></li></ol>
<a href="">母婴</a>/<a href="">玩具乐器</a>`,
 ` <ol><li><a href="">家电馆</a></li>
 <li><a href="">家电专卖店 ></a></li>
 <li><a href="">家电服务 ></a></li>
 <li><a href="">企业采购 ></a></li>
 <li><a href="">商用电器 ></a></li></ol>
    <a href="">食品</a>/<a href="">酒类</a>/<a href="">生鲜</a>/<a href="">特产</a>`, 
  ` <ol><li><a href="">家电馆</a></li>
  <li><a href="">家电专卖店 ></a></li>
  <li><a href="">家电服务 ></a></li>
  <li><a href="">企业采购 ></a></li>
  <li><a href="">商用电器 ></a></li></ol>
  <a href="">艺术</a>/<a href="">礼品鲜花</a>/<a href="">农资绿植</a>`, 
 ` <ol><li><a href="">家电馆</a></li>
 <li><a href="">家电专卖店 ></a></li>
 <li><a href="">家电服务 ></a></li>
 <li><a href="">企业采购 ></a></li>
 <li><a href="">商用电器 ></a></li></ol>
   <a href="">医药保健</a>/<a href="">计生情趣</a>`,
 ` <ol><li><a href="">家电馆</a></li>
 <li><a href="">家电专卖店 ></a></li>
 <li><a href="">家电服务 ></a></li>
 <li><a href="">企业采购 ></a></li>
 <li><a href="">商用电器 ></a></li></ol>
   <a href="">图书</a>/<a href="">文娱</a>/<a href="">教育</a>/<a href="">电子书</a>`,
  `<ol><li><a href="">家电馆</a></li>
  <li><a href="">家电专卖店 ></a></li>
  <li><a href="">家电服务 ></a></li>
  <li><a href="">企业采购 ></a></li>
  <li><a href="">商用电器 ></a></li></ol>
     <a href="">机票</a>/<a href="">酒店</a>/<a href="">旅游</a>/<a href="">生活</a>`,
  ` <ol><li><a href="">家电馆</a></li>
  <li><a href="">家电专卖店 ></a></li>
  <li><a href="">家电服务 ></a></li>
  <li><a href="">企业采购 ></a></li>
  <li><a href="">商用电器 ></a></li></ol>
      <a href="">理财</a>/<a href="">众筹</a>/<a href="">白条</a>/<a href="">保险</a>`, 
  `  <ol><li><a href="">家电馆</a></li>
  <li><a href="">家电专卖店 ></a></li>
  <li><a href="">家电服务 ></a></li>
  <li><a href="">企业采购 ></a></li>
  <li><a href="">商用电器 ></a></li></ol>
      <a href="">安装</a>/<a href="">维修</a>/<a href="">清洗</a>/<a href="">二手</a>`]
// var divs = $1(".banner_02 .more");
for (var i = 0; i < lit.length; i++) {
    lit[i].index = i;
    lit[i].onmouseenter = function () {
        this.style.backgroundColor = "#ccc";
        this.lastChild.style.display = "block";
        this.lastChild.innerHTML = arr[this.index];
    }
    lit[i].onmouseleave = function () {
        this.style.backgroundColor = "#fff";
        this.lastChild.style.display = "none";
    }
}

//选项卡切换
var serve=$1('.banner_05 .serve');
var boxs=$2('.serve .box1');
var main=$1('.serve .main');
var em=$1('.main_con em');
//图标切换
for(var i=0;i<boxs.length;i++){
    boxs[i].index=i;
    boxs[i].onmouseenter=function(){
        boxs[this.index].children[0].style.display="none";
        boxs[this.index].children[1].style.display="block";
    }
    boxs[i].onmouseleave=function(){
        boxs[this.index].children[0].style.display="block";
        boxs[this.index].children[1].style.display="none";
    }
}
//子表单
for(var n=0;n<4;n++){
    boxs[n].index=n;
    boxs[n].onmouseenter=function(){
        main.style.top=8+'px';
    }
}
//点击删除子表单
em.onclick=function(){
    main.style.top=240+'px';
}
})