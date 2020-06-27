//时间戳版
function throttle(fun, delay = 500){
    let previous = 0;
    return function(args){
        let now = Date.now();
        let that = this;
        let _args = args;
         if(now - previous > delay){
             fun.apply(that,_args);
             previous = now;
         }
    }
}

//定时器版
function throttle(fun,delay = 500){
    let timer;
    return function(args){
        let that = this;
        let _args = args;
        if(!timer){
            timer = setTimeout(function(){
                timer = null;
                fun.apply(that,_args)
            },delay)
        }
        
    }
}

//时间戳+定时器：实现第一次触发可以立即响应，结束触发后也能有响应（该版才是最符合工作实际需求的）
function throttle(fun,delay = 500){
    let timer = null;
    let previous = 0;
    return function(args){
        let now = Date.now();
        let remaining = delay - (now - previous);
        let that = this;
        let _args = args;
        
        clearTimeout(timer);//清除之前设置的定时器
        if(remaining <= 0){
            fun.apply(that,_args);
            previous = Date.now();
        }else{
            timer = setTimeout(function(){
            fun.apply(that,_args);
            },remaining);//因为上面添加的clearTimeout，实际上这个定时器只有最后一次才会执行
        }
    }
}