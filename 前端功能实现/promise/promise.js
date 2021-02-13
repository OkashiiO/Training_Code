//使用class封装Promise


function Promise(executor){
    //添加属性
    this.promiseState = 'pending';
    this.promiseResult = null;
    this.callback = [];
    //保存实例对象的this值
    const self = this;
    //resolve函数
    function resolve(data){
        if(self.promiseState === 'pending'){
            //修改对象状态--promiseState
            self.promiseState = 'fullfilled'
            //修改对象结果值--promiseResult
            self.promiseResult = data;
            //调用回调函数
            setTimeout(() => {
                self.callback.forEach(item => {
                    item.onResolved(data);
                })
            });
        }
    }
    //reject函数
    function reject(data){
        //与resolve同理
        if(self.promiseState === 'pending'){
            self.promiseState = 'rejected';
            self.promiseResult = data;
            setTimeout(() => {
                self.callback.forEach(item => {
                    item.onRejected(data);
                })
            });
        }
    }
    try{
        //同步调用执行器函数executor
        executor(resolve,reject);  
    }catch(e){
        //修改promise对象状态为失败
        reject(e);
    }
    
}

Promise.prototype.then = function(onResolved,onRejected){
    const self = this;
    if(typeof onRejected !== 'function'){
        onRejected = reason => {
            throw reason;
        }
    }
    if(typeof onResolved !== 'function'){
        onResolved = value => value;
    }
    return new Promise((resolve,reject) => {
        function callback(type){
            try{
                let result = type(self.promiseResult);
                if(result instanceof Promise){  
                    result.then(v => {
                        resolve(v);
                    },r => {
                        reject(r);
                    })
                }else{
                    //结果的对象状态为成功
                    resolve(result);
                }
            }catch(e){
                reject(e)
            }
        }

        if(this.promiseState === 'fullfilled'){
            setTimeout(() => {
                callback(onResolved);
            });
        }
        if(this.promiseState === 'rejected'){
            setTimeout(() => {
                callback(onRejected);
            });
        }
        if(this.promiseState === 'pending'){
            //保存回调函数
            this.callback.push({
                onResolved: function(){
                    callback(onResolved);
                },
                onRejected: function(){
                    callback(onRejected);
                },
            });
        }
    })
}

Promise.prototype.catch = function(onRejected){
    return this.then(undefined,onRejected);
}

//resolve方法
Promise.resolve = function(value){
    return new Promise((resolve,reject) => {
        if(value instanceof Promise){
            value.then(v=> {
                resolve(v);
            },r => {
                reject(r);
            })
        }else{
            resolve(value)
        }
    })
}

//reject方法
Promise.reject = function(reason){
    return new Promise((resolve,reject) =>{
        reject(reason);
    })
}

Promise.all = function(promises){
    return new Promise((resolve,reject) => {
        let count = 0;
        let arr = [];
        for(let i=0;i<Promise.length;i++){
            promise[i].then(v=>{
                //每有一个成功，计数加一
                count++;
                //将promise对象成功的结果存入到数组中
                arr[i] = v;
                if(count === promises.length){
                    //当所有对象状态都为成功时，修改Promise状态
                    resolve(arr);
                }
            },r=>{
                reject(r);
            })
        }
    })
}

Promise.race  = function(promises){
    return new Promise((resolve,reject) => {
        for(let i=0;i<promises.length;i++){
            promises[i].then(v=>{
                resolve(v);
            },r=>{
                reject(r);
            })
        }
    })
}