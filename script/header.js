window.addEventListener('load',function(){
    // 头部导航
    var btnlogin=$1('.btn-login');
    var spc=$1('.spc');
    var mobile=$1('.mobile');
    // 如果登录过就显示账号
    if(localStorage.getItem('login')){
        var exist=JSON.parse(localStorage.getItem('userobj'));
        for(var i=0;i<exist.length;i++){
        btnlogin.innerHTML=`<em class="drop_out"><i>${exist[i].user}</i>退出</em>`;
        }
    
    var drop_out=$1('.drop_out');
    //退出
    drop_out.onclick=function(){
        localStorage.removeItem('login');
    }
   }
    // 购物车
    spc.onclick=function(){
        location.reload()//刷新页面
        if(localStorage.getItem('login')){
            this.href='../views/shoppingcart.html'
        }else{
            this.href='../views/login.html'
        }
    }
    // 客户服务
    mobile.onclick=function(){
        if(localStorage.getItem('login')){
            this.href='../views/index.html'
        }else{
            this.href='../views/login.html'
        }
    }
})