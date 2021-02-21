var user = $1('.user')
var pass = $1('.pass')
var add = $1('.add')

//保存一个账号密码
var box=[{
user:'枼',
pass:'814600'
}]
localStorage.setItem('userobj',JSON.stringify(box))

//注册
add.onclick = function (){
    var userobj=JSON.parse(localStorage.getItem('userobj'));
    console.log(userobj)
    var userobjs={
          user:user.value,
          pass:pass.value
        }
    for(var i=0;i<userobj.length;i++){
    if(userobj[i].user===userobjs.user){
        alert('已有该账号')
        return
    }    
    }
    //注册成功
    alert('注册成功')
    userobj.push(userobjs);//没有相同的账号向数组里添加数据
    //保存账号密码,更新数据
    localStorage.setItem('userobj',JSON.stringify(userobj))

    location.href='../views/index.html';

}