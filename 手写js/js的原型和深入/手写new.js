function myNew(Func,...args){
    const obj = {};

        //将obj的原型指向构造函数，这样obj就可以访问到构造函数原型的属性
    obj.__proto__ = Func.prototype;
        //或下面这个
        // if(Func.prototype){
        //     Object.setPrototypeOf(obj,Func.prototype);
        // }
        //使用setPrototypeofge性能更好

        //使用apply，改变构造函数的this指向到新建的对象，这样obj就可以通过this访问到构造函数中的属性
    const res = Func.apply(obj,args);

        //判断构造函数的返回值是什么，
        //如果是一个对象，则返回这个对象
        //如果是其他的（字符串等），就该返回什么就返回什么   
    return typeof res === 'object' ? res : obj;

}

function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log('My name is ' + this.name);
}
const me = myNew(Person,'jack');
me.sayName();
console.log(me)