Function.prototype.myCall = function(context = globalThis){
    const key = Symbol('key');
    context[key] = this;
    const args = [...arguments].slice(1);
    const res = context[key](...args);
    delete context[key];
    return res;
}

const me = {name : 'jack'}
function say(){
    console.log('My name is ' + this.name);
}
say.myCall(me);