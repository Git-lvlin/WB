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
//下一页
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
//上一页
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

//点击切换图片
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

//折扣轮播
var banner_04 = $1(".banner_04");
var boximg = $2('.bannerbox .box');
var pervs = $1('.banner_04 .pervs');
var nexts= $1('.banner_04 .nexts');
var timers;
var currs = 0; //当前图片索引
var pers = 0; //上一张图片索引

// 进入页面执行自动播放
animate(boximg[currs], {
    'opacity': 1
}, function () {
    autoPlays() // 自定播放
})

// 自动播放
function autoPlays() {
    timers = setInterval(function () {
        nexmoves()
    }, 3000);
}
//下一页
function nexmoves() {
    //上一张图片清除样式
    boximg[pers].className = '';
    boximg[pers].style.opacity = 0
    currs++
    if (currs >= boximg.length) {
        currs = 0;
    }
    boximg[currs].className = "show";
    animate(boximg[currs], {
        'opacity': 1
    })
    pers = currs;
}
//上一页
function permoves() {
    //上一张图片清除样式
    boximg[pers].className = "";
    boximg[pers].style.opacity = 0
    currs--
    if (currs < 0) {
        currs = boximg.length - 1;
    }
    boximg[currs].className = "show";
    animate(boximg[currs], {
        'opacity': 1
    })
    pers = currs;
}
banner_04.onmouseenter = function () {
    pervs.style.display = "block";
    nexts.style.display = "block";
    //上一页按钮
    pervs.onclick = function () {
        clearInterval(timers);
        clearInterval(boximg[currs].timer);
        permoves()
        autoPlays() // 过两秒播放
    }
    //下一页按钮
    nexts.onclick = function () {
        clearInterval(timers);
        clearInterval(boximg[currs].timer);
        nexmoves()

        autoPlays() // 过两秒播放
    }
}
banner_04.onmouseleave = function () {
    pervs.style.display = "none";
    nexts.style.display = "none";
}
})