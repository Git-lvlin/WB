window.addEventListener('load',function(){
    var guess_lk_s=$1('.guess_lk_slider');
    ajax({
        url:"../json/guess_like_slider.json",
        type:'get',
        dataType:'json',
        success:function(json){
            var lk_obj='';
            json.forEach(function(item,index){
                lk_obj+=`<a href="">
                    <img src="${item.src}" alt="">
                    <p class="p1">${item.p1}</p>
                    <p class="p2">${item.p2}</p>
                    <div class="fenqi">
                        <em>月付</em>
                        <span class="fenqi_price">${item.fenqi_price}</span>
                        <span class="s_price">${item.fenqi_price}</span>
                    </div>
                   </a>`
            }); 
            guess_lk_s.innerHTML=lk_obj;
        }
    })
})