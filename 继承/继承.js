
//原型链继承*************************
function Parent1(){
    this.name = 'kevin';
}

function Child1(){

}
Child1.prototype = new Parent1();

//借用构造函数************************
function Parent2(){
    this.name = 'a';
}
function Child2(){
    Parent2.call(this);
}

//组合继承************************
function Parent3(){
    this.name = 'b';
}
function Child3(name,age){
    Parent3.call(this,name);
    this.age = age;
}
Child3.prototype = new Parent3();
child = new Child3();

// 原型式继承
function createObj(o){
    function F(){}
    F.prototype = o;
    return new F();
}
var person = {
    name:'a',
}
var person1 = createObj(person)

//寄生式继承
function createObj2(o){
    var clone = createObj(o);
    clone.say = function(){
        console.log('hi');
    }
}
var person2 = {
    name:'a'
}
var anotherperson = createObj2(person2);

//


