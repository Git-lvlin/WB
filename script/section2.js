window.addEventListener('load',function(){
    var litr=$2('#section2 ul li');
    var recom=$1('.recom');
    var pars=0;
    var arr=[{url:'https://img14.360buyimg.com/babel/s150x150_jfs/t1/125350/24/19126/103161/5fb3a333Ef9e3cffe/fec748dd4d9fe008.jpg.webp',txt:'中国电信 电信流量卡4g手机号码卡腾讯5g大王卡电话卡日租卡不限速无限纯流量卡不限量上网卡 （民营卡）39元/月100G通用流量不限速',pic:56},
    {url:'https://img13.360buyimg.com/babel/s150x150_jfs/t1/120310/34/5442/131858/5eef689fE427193d3/e2918441793931a7.jpg.webp',txt:'AFTERSHOKZ 韶音AS650  Air骨传导耳机运动蓝牙耳机无线耳骨传导耳机骑行跑步 丛林绿',pic:456},
    {url:'https://img30.360buyimg.com/babel/s150x150_jfs/t1/123734/9/15477/67740/5f8b0057E20c9325a/1573ad521cba1ac6.jpg.webp',txt:'客车拖把伸缩长杆柄五面洗车刷子喷水通水刷汽车美容清洁用品 绿色',pic:56},
    {url:'https://img10.360buyimg.com/babel/s150x150_jfs/t1/130896/33/4286/67345/5f0acc0dE3a25393e/9f533050e898b78e.jpg.webp',txt:'清华同方体脂秤 好体知体脂称 体重秤家用电子秤 APP蓝牙脂肪秤 精准测量21项人体数据 大白M1',pic:67},
    {url:'https://img14.360buyimg.com/babel/s150x150_jfs/t25582/40/797827523/74208/4f357f10/5b7a7b45Nb70674d8.jpg.webp',txt:'擦车洗车去污泥火山泥 清洁除飞漆粉汽车美容 红色',pic:56},
    {url:'https://img30.360buyimg.com/babel/s150x150_jfs/t1/102286/23/17009/38161/5e81fcc3E50dd6c21/b0bf10c33b39b24f.jpg.webp',txt:'爱玛（AIMA）小蜜豆至臻版时尚电动自行车电瓶车小型助力车新国标48V12AH外卖电动车 珠光牛油果绿/亚黑(纯享版)',pic:67},
    {url:'https://img10.360buyimg.com/babel/s150x150_jfs/t1/152983/3/1030/103748/5f71ff96Edbe795d7/477d87dc6b438ebe.jpg.webp',txt:'车用折叠水桶大容量便携软硅胶钓鱼桶户外储水桶加厚洗车桶 GY-2228',pic:56},
    {url:'https://img13.360buyimg.com/babel/s150x150_jfs/t1/77436/11/5393/252319/5d39451eE09abf4d8/3980799fa4a8b380.jpg.webp',txt:'好牧人 无线K歌麦克风混音器麦克风音响声卡套装家庭KTV电视K歌电脑手机投影仪通用K歌神器 电视K歌无线话筒（内置声卡芯片）',pic:797},
    {url:'https://img11.360buyimg.com/babel/s150x150_jfs/t1/111213/35/2159/191393/5e9fa9ebE129e2b1f/6c597a8be0cb7045.jpg.webp',txt:'车载香水车内饰品摆件汽车装饰用品大全女神款高档漂亮女水晶天鹅 红色天鹅（银脖子）+羽毛垫',pic:98},{url:'https://img10.360buyimg.com/babel/s150x150_jfs/t1/140386/32/7661/58051/5f51f938Eb809c667/e514b201cbe504c9.jpg.webp',txt:'JNN 录音笔微型专业GPS手机远程控制高清降噪超长待机随身声控车内录音器 远程录音/定位+无限内存 云储存 云储存',pic:79},
    {url:'https://img11.360buyimg.com/babel/s150x150_jfs/t1/78602/12/15653/132698/5dd09745E062cf019/bbc41652d5474e70.jpg.webp',txt:'卡通动物砂锅 可爱陶瓷砂锅炖锅砂锅煲3L 陶瓷锅具 小熊3L 1只',pic:78},
    {url:'https://img20.360buyimg.com/babel/s150x150_jfs/t1/125709/8/2654/253234/5ec79e54E3dae8a9e/cab6d1ca2f06201f.jpg.webp',txt:'中国电信 电信流量卡4g手机号码卡腾讯5g大王卡电话卡日租卡不限速无限纯流量卡不限量上网卡 （民营卡）39元/月100G通用流量不限速',pic:67},
    {url:'https://img20.360buyimg.com/babel/s150x150_jfs/t1/50176/29/16909/70504/5de09411E5aa11761/ef0f9d38239b0822.jpg.webp',txt:'唯呗（weibei）旋转拖把桶好神拖 双驱动免手洗加大号家用拖把商通用替换头海绵墩布刮刮乐 不锈钢盘+4块拖布',pic:45},{url:'https://img10.360buyimg.com/babel/s150x150_jfs/t1/119829/21/5148/16994/5ebb7a77Ea080aa0f/388b764014e2ea16.jpg.webp',txt:'山山 【艾草+益母草+生姜】暖贴暖宝宝贴暖宫 寒贴暖脚神器暖足贴腰部关节发热贴暖身暖肚子60片',pic:232},
    {url:'https://img12.360buyimg.com/babel/s150x150_jfs/t1/129914/26/18262/82320/5fc755c4Eab755a8a/ef32329f3142e205.jpg.webp',txt:'新款miss创意彩光杯加湿器 汽车车载家用usb香薰精油雾化空气净化器 蓝色',pic:454}
]
  
for(let i=0;i<litr.length;i++){
        litr[i].onclick=function(e){
            e.preventDefault()
            console.log(arr[i].url)
            recom.innerHTML=`<tr>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
            <img src="${arr[i].url}"
                alt="">
            <p>${arr[i].txt}</p>
            <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
            <img src="${arr[i].url}"
                alt="">
            <p>${arr[i].txt}</p>
            <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
         </tr>
         <tr>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
         </tr>
         <tr>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
            <td>
                <img src="${arr[i].url}"
                    alt="">
                <p>${arr[i].txt}</p>
                <span>￥<i>${arr[i].pic}</i>.00</span>
            </td>
         </tr>`
            // Control[pars].style.display='none';//上次的隐藏
            litr[pars].children[0].children[0].className='';//清除上次的样式
            litr[pars].children[0].children[1].className='';//清除上次的样式

            litr[i].children[0].children[0].className='stly';//给当前添加类名
            litr[i].children[0].children[1].className='tiy';
            // Control[i].style.display='block';//当前的显示
            pars=i;

        }
    }
})