window.addEventListener('load',function(){
    var phbox = $1('.phbox')
    var phcon = $1('.phcon')
    var phcon2 = $1('.phcon2')
    var pr= $1('.pr')
    var nx = $1('.nx')
    var imgWidth = $1('.phcon .phone').clientWidth
    // 复制一份图片
    phcon2.innerHTML = phcon.innerHTML
    var maxWidth = phcon.clientWidth
    var timer
    function moveLeft(){
      clearInterval(timer)
      timer = setInterval(function(){
        phbox.scrollLeft+=2
        // 临界值判断
        if (phbox.scrollLeft >= maxWidth) {
            phbox.scrollLeft = 0
        }
        if (phbox.scrollLeft%imgWidth == 0) {
          clearInterval(timer)
          setTimeout(function (){
            moveLeft()
          },3000)
        }
      },10)
    }
    function moveRight(){
      clearInterval(timer)
      timer = setInterval(function(){
        phbox.scrollLeft-=2
        // 临界值判断
        if (phbox.scrollLeft <= 0) {
            phbox.scrollLeft = maxWidth
        }
        if (phbox.scrollLeft%imgWidth == 0) {
          clearInterval(timer)
          setTimeout(function (){
            moveRight()
          },3000)
        }
      },10)
    }
    moveLeft()//进入页面自动执行
    
    pr.onclick = function (){
      moveLeft()
    }
    nx.onclick = function (){
      moveRight()
    }
})