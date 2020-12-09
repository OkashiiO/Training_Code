_instanceof(f, Foo);  

function _instanceof(a, b) {
    while(a){
        if(a.__proto__ === b.prototype ) return true;
        a = a.__proto__;
    }
    return false;
}
  
  // 测试
  class Parent {};
  class Child extends Parent {};
  const child = new Child();

  console.log(_instanceof(child, Parent), _instanceof(child, Child), _instanceof(child, Array));  