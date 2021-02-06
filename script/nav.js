window.addEventListener('load',function(){
    var serve=$1('.nav_bax .serve');
    var wb_down=$1('.wb_down');
    serve.onmouseenter=function(){
        serve.style.backgroundColor='#fff';
        serve.style.border='1px solid #ccc';
        wb_down.style.height=168+'px';
        wb_down.style.display='block';
    }
    serve.onmouseleave=function(){
        serve.style.backgroundColor='#f4f4f4';
        serve.style.border='1px solid transparent';
        wb_down.style.height=0;
        wb_down.style.display='none';
    }
})