//非立即执行版
function debounce(func,delay = 1000){
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this,args)
        },delay)
    }
}

const task = () => {console.log('run task')}
const debounceTask = debounce(task,1000);
window.addEventListener('click',debounceTask);


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