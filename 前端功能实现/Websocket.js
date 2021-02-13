var MySocket = WebSocket('ws://www.example.com/socketserver',"protocolOne");
//定义JSON对象
var msg = {
    type: "message",
    text: document.getElementById("text").value,
    id:   clientID,
    date: Date.now()
};
//使用onopen确保连接建立
MySocket.onopen = function(event){
    //发送JSON对象
    MySocket.send(JSON.stringify(msg));
}

//清空text文本，准备接受下一条消息
document.getElementById("text").value = "";

//接受服务器数据
MySocket.onmessage = function(event){
    var msg = JSON.parse(evnet.data);
}

MySocket.close();