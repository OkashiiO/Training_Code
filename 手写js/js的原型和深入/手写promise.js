//手写promise思路

// 写一个Promise类，构造函数接受一个executor参数，
// 在构造函数里面添加属性
// status(状态pending、resolved、rejected)、
// onResolvedCallBacks(存放成功回调的数组)、
// onRejectedCallBacks（存放失败回调的数组）、
// data（成功得到的数据），reason（失败的原因）。
// 定义成功函数和失败函数，在对应的函数中判断status并给其他属性赋值。
// 最后使用try catch立即执行函数executor，try中将成功函数和失败函数作为参数传入executor，catch中就直接reject。

// 在类中添加then函数，接受成功回调和失败回调两个参数，利用setTimeout创建异步，
// 如果then是一个Promise，则继续递归Promise，否则直接成功，如果捕捉到错误，就reject失败。
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function MyPromise(fn) {
    const self = this;
    self.value = null;
    self.error = null;
    self.status = PENDING;
    self.onFulfilledCallbacks = [];
    self.onRejectedCallbacks = [];

    function resolve(value) {
        if (value instanceof MyPromise) {
            return value.then(resolve, reject);
        }
        if (self.status === PENDING) {
            setTimeout(() => {
                self.status = FULFILLED;
                self.value = value;
                self.onFulfilledCallbacks.forEach((callback) => callback(self.value));
            }, 0)
        }
    }

    function reject(error) {
        if (self.status === PENDING) {
            setTimeout(function() {
                self.status = REJECTED;
                self.error = error;
                self.onRejectedCallbacks.forEach((callback) => callback(self.error));
            }, 0)
        }
    }
    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

function resolvePromise(bridgepromise, x, resolve, reject) {
    //2.3.1规范，避免循环引用
    if (bridgepromise === x) {
        return reject(new TypeError('Circular reference'));
    }
    let called = false;
    //这个判断分支其实已经可以删除，用下面那个分支代替，因为promise也是一个thenable对象
    if (x instanceof MyPromise) {
        if (x.status === PENDING) {
            x.then(y => {
                resolvePromise(bridgepromise, y, resolve, reject);
            }, error => {
                reject(error);
            });
        } else {
            x.then(resolve, reject);
        }
        // 2.3.3规范，如果 x 为对象或者函数
    } else if (x != null && ((typeof x === 'object') || (typeof x === 'function'))) {
        try {
            // 是否是thenable对象（具有then方法的对象/函数）
            //2.3.3.1 将 then 赋为 x.then
            let then = x.then;
            if (typeof then === 'function') {
            //2.3.3.3 如果 then 是一个函数，以x为this调用then函数，且第一个参数是resolvePromise，第二个参数是rejectPromise
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    resolvePromise(bridgepromise, y, resolve, reject);
                }, error => {
                    if (called) return;
                    called = true;
                    reject(error);
                })
            } else {
            //2.3.3.4 如果 then不是一个函数，则 以x为值fulfill promise。
                resolve(x);
            }
        } catch (e) {
        //2.3.3.2 如果在取x.then值时抛出了异常，则以这个异常做为原因将promise拒绝。
            if (called) return;
            called = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const self = this;
    let bridgePromise;
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
    onRejected = typeof onRejected === "function" ? onRejected : error => { throw error };
    if (self.status === FULFILLED) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onFulfilled(self.value);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }, 0);
        })
    }
    if (self.status === REJECTED) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(self.error);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }, 0);
        });
    }
    if (self.status === PENDING) {
        return bridgePromise = new MyPromise((resolve, reject) => {
            self.onFulfilledCallbacks.push((value) => {
                try {
                    let x = onFulfilled(value);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
            self.onRejectedCallbacks.push((error) => {
                try {
                    let x = onRejected(error);
                    resolvePromise(bridgePromise, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
}
MyPromise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
}
// 执行测试用例需要用到的代码
MyPromise.deferred = function() {
    let defer = {};
    defer.promise = new MyPromise((resolve, reject) => {
        defer.resolve = resolve;
        defer.reject = reject;
    });
    return defer;
}
try {
    module.exports = MyPromise
} catch (e) {}


//Promise.all()实现
function promiseAll(promises){
    return new Promise(function(resolve,reject){
           if(!Array.isArray(promises)){
            return reject(new TypeError("argument must be anarray"))
          }
   var countNum=0;
   var promiseNum=promises.length;
   var resolvedvalue=new Array(promiseNum);
   for(var i=0;i<promiseNum;i++){
    (function(i){
        Promise.resolve(promises[i]).then(function(value){
           countNum++;
          resolvedvalue[i]=value;
         if(countNum===promiseNum){
             return resolve(resolvedvalue)
         }
      }),function(reason){
       return reject(reason)
      }
    })(i)
   }
})
}
var p1=Promise.resolve(1),
p2=Promise.resolve(2),
p3=Promise.resolve(3);
promiseAll([p1,p2,p3]).then(function(value){
console.log(value)
})

