window.addEventListener('load',function(){
    var menu_li = document.querySelectorAll('.nav_left_menu ul li');
    var col_ul = document.querySelector('.menu_list ul');
    var sub_menu=document.querySelector('.sub_menu');
    ajax({
        url: '../json/banner.json',
        type: 'get',
        dataType: 'json',
        success: function (res) {
            for (let i = 0; i < menu_li.length; i++) {
                menu_li[i].onmouseenter = function () {
                    sub_menu.style.display='block';
                    var domli = '';
                    for (let j = 0, len = res[i].length; j < len; j++) {
                        domli += `
                            <li>
                                <a href="../views/product _list.html">
                                    <img src="${res[i][j].src}" alt="">
                                    <p>${res[i][j].p}</p>
                                </a>
                            </li>`    
                    }
                    col_ul.innerHTML=domli;

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
                }
                menu_li[i].onmouseleave = function () {
                    sub_menu.style.display='none';
                }
            } 
        }
    })
    
    var iconall=$1('.allx');
    var menu=$1('.nav_left_menu');
    var fag=0;
    iconall.onclick=function(){
        
        if(fag){
            menu.className='nav_left_menu lt';
            fag=!fag
        }else{
            menu.className='nav_left_menu bk';
            fag=!fag
        }
    }
   
})