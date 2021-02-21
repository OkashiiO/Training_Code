'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//默认暴露 暴露任意数据。暴露声明数据接受到就是声明数据
exports.default = {
    msg: '默认暴露',
    foo: function foo() {
        console.log(this.msg);
    }
};