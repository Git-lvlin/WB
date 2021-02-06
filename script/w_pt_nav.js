$(function () {
    var menu_li = $2('.nav_left_menu ul li');
    var col_ul = $1('.brand_list ul');
    var a = $.ajax({
        url: '../json/banner.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (res) {
            for (let i = 0; i < menu_li.length; i++) {
                menu_li[i].onmouseenter = function () {
                    var domli = '';
                    for (let j = 0, len = res[i].length; j < len; j++) {
                        domli += `
                            <li>
                                <a href="">
                                    <img src="${res[i][j].src}" alt="">
                                    <p>${res[i][j].p}</p>
                                </a>
                            </li>`
                    }
                    col_ul.innerHTML = domli;
                }

            }
        }
    })
    console.log(col_ul)
    console.log(a);
    var b = new Promise(_=>_)
    console.log(b.__proto__);


    // 图片文字切换
    var con_li = $2('.col_1 ul li');
    var con_img = $2('.col_1 img');
    var con_p = $2('.col_1 p');
    for (let i = 0; i < con_li.length; i++) {
        con_li[i].onmouseenter = function () {
            con_img[i].style.display = 'none'; //图片隐藏
            con_p[i].style.display = 'block'; //文字显示
        }
        con_li[i].onmouseleave = function () {
            con_img[i].style.display = 'block'; //图片显示
            con_p[i].style.display = 'none'; //文字隐藏
        }
    }


})