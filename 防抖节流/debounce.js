//非立即执行版
//回调函数
function shotCat(content){
    console.log('回调函数',content);
}

//
function debounce(fun, delay = 500){
    let timer = null;
    return function(args){
        let that = this;
        let _args = args;
        
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
            fun.call(that,_args)
        },delay);
    }
}

let debounceShotCat = debounce(shotCat,500);

//假设监听搜索框，在键盘输入后延迟500ms执行回调函数（发送请求）
let input = document.getElementById('Search');
input.addEventListener('keyup',function(e){
    debounceShotCat(e.target.value)
})


//带有立即执行选项的防抖函数
function debounce(fun, delay = 500, immediate = true){
    let timer = null;
    return function(args){
        let that = this;
        let _args = args;

        if(timer) clearTimeout(timer);

        if(immediate){
            if(!timer) fun.apply(that,_args);
            timer = setTimeout(function(){
                timer = null;
            },delay)
        }
        else{
            timer = setTimeout(function(){
                fun,call(that,_args);
            },delay);
        }
    }
}