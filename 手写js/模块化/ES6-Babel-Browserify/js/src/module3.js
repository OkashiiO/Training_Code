//默认暴露 暴露任意数据。暴露声明数据接受到就是声明数据
export default{
    msg:'默认暴露',
    foo(){
        console.log(this.msg);
    }
}