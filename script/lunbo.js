window.addEventListener('load', () => {
//大图轮播(渐变)
var wrap = document.querySelector('.wrap');
var imgs = document.querySelectorAll('.pic img');
var oUl = document.querySelector('.wrap ul');
var perv = document.querySelector('.wrap .perv');
var next = document.querySelector('.wrap .next');
for (var i = 0; i < imgs.length; i++) {
    oUl.innerHTML += '<li></li>';
}
var lit = document.querySelectorAll('.wrap ul li');
var timer;
var sum = 0; //当前图片索引
var per = 0; //上一张图片索引

// 进入页面执行自动播放
animate(imgs[sum], {
    'opacity': 1
}, function () {
    autoPlay() // 自定播放
})

// 自动播放
function autoPlay() {
    timer = setInterval(function () {
        nexmove()
    }, 2000);
}
//移动到下一页
function nexmove() {
    //上一张图片清除样式
    imgs[per].className = '';
    imgs[per].style.opacity = 0
    lit[per].className = '';
    sum++
    if (sum >= imgs.length) {
        sum = 0;
    }
    imgs[sum].className = "show";
    lit[sum].className = 'active';
    animate(imgs[sum], {
        'opacity': 1
    })
    per = sum;
}
//移动到上一页
function permove() {
    //上一张图片清除样式
    imgs[per].className = "";
    imgs[per].style.opacity = 0
    lit[per].className = '';
    sum--
    if (sum < 0) {
        sum = imgs.length - 1;
    }
    imgs[sum].className = "show";
    lit[sum].className = 'active';
    animate(imgs[sum], {
        'opacity': 1
    })
    per = sum;
}
//上一页按钮
perv.onclick = function () {
    clearInterval(timer);
    clearInterval(imgs[sum].timer);
    permove()

    autoPlay() // 过两秒播放
}
//下一页按钮
next.onclick = function () {
    clearInterval(timer);
    clearInterval(imgs[sum].timer);
    nexmove()

    autoPlay() // 过两秒播放
}

//点击页码切换图片
for (var i = 0; i < lit.length; i++) {
    lit[i].index = i;
    lit[i].onmouseenter = function () {
        clearInterval(timer);
        clearInterval(imgs[sum].timer);

        imgs[per].className = "";
        imgs[per].style.opacity = 0
        lit[per].className = '';

        sum = this.index;

        imgs[sum].className = "show";
        lit[sum].className = 'active';
        animate(imgs[sum], {
            'opacity': 1
        })
        per = sum;

        autoPlay() // 过两秒播放
    }
}
})
