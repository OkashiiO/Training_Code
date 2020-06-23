//定义三种状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECT = "rejected";

function MyPromise (fn) {
    let self = this;
    self.value = null;
    self.error = null;
    self.status = PENDING;
    self.onFulfilled = null;
    self.onRejected = null;

    self.onFulfilledCallbacks = [];//链式操作
    self.onRejectedCallbacks = [];
    self.onFulfilledCallbacks.forEach((callback) => callback(self.value));

    function resolve(value) {
        if(self.status === PENDING){
            setTimeout(()=>{
                self.status = FULFILLED;
                self.value = value;
                self.onFulfilled(self.value);
            })
        }
    }

    function reject(error) {
        if(self.status === PENDING){
            setTimeout(()=>{
                self.status = REJECT
                self.error = error;
                self.onRejected(self.error);
            })
        }
    }
    fn(resolve, reject);
}
MyPromise.prototype.then = function(onFulfilled,onRejected){
    if(this.status === PENDING){
        this.onFulfilledCallbacks.push(onFulfilled);
        this.onRejectedCallbacks.push(onRejected);
    }else if (this.status === FULFILLED){
        onFulfilled(this.value)
    }else{
        onRejected(this.error)
    }
    return this;

}

module.exports = MyPromise
