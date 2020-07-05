function myNew(){
    let obj = new Object();

    //取出第一个参数，就是我们要传入的构造函数。
    Constructor = [].shift.call(arguments);

    //将obj的原型指向构造函数，这样obj就可以访问到构造函数原型的属性
    obj._proto_ = Constructor.prototype;

    //使用apply，改变构造函数的this指向到新建的对象，这样obj就可以通过this访问到构造函数中的属性
    let ret = Constructor.apply(obj,arguments);

    //判断构造函数的返回值是什么，
    //如果是一个对象，则返回这个对象
    //如果是其他的（字符串等），就该返回什么就返回什么
    return typeof ret === 'object' ? ret : obj;
}