window.addEventListener('load',function(){
    //登录页面
    var login=$1('.login');
    var user=$1('.user');
    var pass=$1('.pass');
    var rem=$1('.rem');

    //加载登录页面时没有数据就提示请先注册
    if(!JSON.parse(localStorage.getItem('userobj'))){
        alert('请先注册')
        return false
    }

     // 如果登录过就获取账号密码
    //  if(localStorage.getItem('login')){
    //获取账号密码
    if (JSON.parse(localStorage.getItem('userobj')).length>=2) {
      user.value = JSON.parse(localStorage.getItem('userobj'))[JSON.parse(localStorage.getItem('userobj')).length-1].user;
      pass.value = JSON.parse(localStorage.getItem('userobj'))[JSON.parse(localStorage.getItem('userobj')).length-1].pass;

      rem.checked = true
    } else {
      user.value = ''
      pass.value = ''
    }
  // }
 


    //立即登录
    login.onclick = function (){
       //获取已经注册的账号密码
        var exist=JSON.parse(localStorage.getItem('userobj'));
        var userobj=[
          {
            user:user.value,
            pass:pass.value
          }
        ]
      
        for(var i=0;i<exist.length;i++){
        if (userobj[0].user===exist[i].user&&userobj[0].pass===exist[i].pass) {
          // 保存登录状态
          localStorage.setItem('login','loginSuccess')
          // 判断是否勾选记住密码
          if (rem.checked) {
            // 保存账号密码
            exist.push(userobj[0])
            localStorage.setItem('userobj',JSON.stringify(exist))

          } 
          else {
            if(JSON.parse(localStorage.getItem('userobj')).length>=3){
               // 删除账号密码数据
              exist.splice(0,JSON.parse(localStorage.getItem('userobj')).length-1)
              localStorage.setItem('userobj',JSON.stringify(exist))
            }else if(JSON.parse(localStorage.getItem('userobj')).length>=2){
               // 删除账号密码数据
               exist.splice(0,1)
               localStorage.setItem('userobj',JSON.stringify(exist))
            }else{
              // 删除账号密码数据
              exist.splice(0,0)
              localStorage.setItem('userobj',JSON.stringify(exist))
            }
           
          }
          location.href='../views/index.html'
          return false//阻止表单提交
        }
      }
        alert('账号或密码错误！或者没有注册过')
       
    }
})